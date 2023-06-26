import { SiweMessage } from "siwe";
import { User } from "~/server/models/User";
import { getToken } from "~/server/services/jwt";
import { JwtPayload } from "~/server/types";

export default defineEventHandler(async (event: any) => {
  try {
    const { signature, message, address, nonce } = await (event.node?.req
      ?.body || readBody(event));

    const siweMessage = new SiweMessage(JSON.parse(message));
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

    // check for request origin and domain
    // if(fields.domain !== event.node.req.headers.host) {
    //   event.res.statusCode = 401;
    //   return {
    //     code: "AuthorizationFailed",
    //     message: "Wrong domain!",
    //   };
    // }

    // if(fields.uri !== event.node.req.headers.origin) {
    //   event.res.statusCode = 401;
    //   return {
    //     code: "AuthorizationFailed",
    //     message: "Wrong uri!",
    //   };
    // }

    const existingUser = await User.findOne({ address: fields.address });

    if (!existingUser) {
      const newUser = new User({
        address: fields.address,
        chainId: fields.chainId,
        role: "user",
      });
      await newUser.save();
    }

    if (
      existingUser &&
      existingUser.address?.toLowerCase() !== fields?.address?.toLowerCase()
    ) {
      event.res.statusCode = 401;
      return {
        code: "AuthorizationFailed",
        message: "Wrong address!",
      };
    }

    const tokenPayload: JwtPayload = {
      address: fields.address,
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
