import { SiweMessage } from "siwe";

export const useSiwe = () => {
  const { sign, account, chainId } = useWeb3();
  async function verifyWallet() {
    try {
      const nonce = await $fetch("/api/auth/nonce", {
        method: "GET",
      });

      if (!nonce)
        return {
          success: false,
          message: "Failed to get nonce from service!",
        };

      if (!account.value)
        return {
          success: false,
          message: "Invalid account!",
        };

      if (!chainId.value)
        return {
          success: false,
          message: "Invalid chainId!",
        };

      const address = account.value;

      const message = new SiweMessage({
        domain: window.location.host,
        chainId: chainId.value,
        address: address,
        statement: "Sign in with Ethereum to the API3 ecosystem",
        uri: window.location.origin,
        version: "1",
        nonce: nonce,
      });

      const messageToSign = message.prepareMessage();
      const signature = await sign({ message: messageToSign });

      if (!signature) {
        console.log("verificationStatus: signature error");
        return {
          success: false,
          message: "Failed to sign message!",
        };
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

      return { success: true, data: signatureVerification };
    } catch (error) {
      console.log("verificationStatus test: signature error", {
        error,
        account: account.value,
        chainId: chainId.value,
      });
      return {
        success: false,
        message: "Failed to sign message!",
      };
    }
  }

  return { verifyWallet };
};
