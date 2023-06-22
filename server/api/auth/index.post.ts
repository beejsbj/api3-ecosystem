import { SiweMessage } from "siwe";
import { User } from "~/server/models/User";
import { getToken } from "~/server/services/jwt";
import { JwtPayload } from "~/server/types";

export default defineEventHandler(async (event: any) => {
  try {
    const { signature, message, address, nonce } = await (event.node?.req
      ?.body || readBody(event));

    const siweMessage = new SiweMessage(message);
    const verificationResult = await siweMessage.verify({ signature });
    const fields = verificationResult.data;
    console.log("fields ", fields);
    if (fields.nonce !== nonce) {
      event.res.statusCode = 401;
      return {
        code: "AuthorizationFailed",
        message: "Invalid nonce.",
      };
    }

    if (fields.address !== address) {
      event.res.statusCode = 401;
      return {
        code: "AuthorizationFailed",
        message: "Wrong address!",
      };
    }

    const existingUser = await User.findOne({ address: fields.address });

    if (!existingUser) {
      const newUser = new User({
        address: fields.address,
        chainId: fields.chainId,
        role: "user",
      });
      await newUser.save();
    }

    const tokenPayload: JwtPayload = {
      address: fields.address,
      chainId: fields.chainId,
      id: existingUser?.id,
      role: "user",
    };

    const token = getToken(tokenPayload);

    return { verified: true, token: token };
  } catch (err: any) {
    console.log("verify signature error ", err);
    event.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something went wrong.",
    };
  }
});
