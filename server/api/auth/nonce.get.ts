import { generateNonce } from "siwe";

export default defineEventHandler(async (event) => {
  try {
    const nonce = generateNonce();

    event.context.nonce = nonce;
    return nonce;
  } catch (err) {
    console.dir(err);
    event.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something went wrong. with nonce",
    };
  }
});
