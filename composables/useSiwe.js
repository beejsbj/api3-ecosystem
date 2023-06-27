import { SiweMessage } from "siwe";

export const useSiwe = () => {
  const { sign, account } = useWeb3();
  async function verifyWallet() {
    try {
      const nonce = await $fetch("/api/auth/nonce", {
        method: "GET",
      });

      const address = account;

      const message = new SiweMessage({
        domain: window.location.host,
        address: address,
        statement: "Sign in with Ethereum to the API3 ecosystem",
        uri: window.location.origin,
        version: "1",
        nonce: nonce,
      });

      console.log("verificationStatus:  message", message);

      const messageToSign = message.prepareMessage();
      const signature = await sign({ message: messageToSign });

      if (!signature) {
        console.log("verificationStatus: signature error");
        return null;
      }

      const signatureVerification = await $fetch("/api/auth", {
        method: "POST",
        body: {
          signature: signature,
          address: address,
          message: JSON.stringify(message),
          nonce: nonce,
        },
      });

      console.log("verificationStatus result", signatureVerification);

      return signatureVerification;
    } catch (error) {
      console.log("verificationStatus: signature error", error);
      return null;
    }
  }

  return { verifyWallet };
};
