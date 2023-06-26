<script setup>
import { useStorage } from "@vueuse/core";
import { setErrors } from "@formkit/vue";
import { getAccount, signMessage } from "@wagmi/core";
import { SiweMessage } from "siwe";

//
definePageMeta({
  title: "Add Dapp",
  layout: "home",
});

useHead({
  title: "Add Dapp",
});

//
const dappForm = useStorage("dapp-form", {});
const complete = ref(false);

async function checkSignatureVerification() {
  try {
    const nonce = await $fetch("/api/auth/nonce", {
      method: "GET",
    });

    const address = getAccount().address;

    const message = new SiweMessage({
      domain: window.location.host,
      address: address,
      statement: "Sign in with Ethereum to the API3 ecosystem",
      uri: window.location.origin,
      version: "1",
      nonce: nonce,
    });

    const messageToSign = message.prepareMessage();
    const signature = await signMessage({ message: messageToSign });

    if (!signature) {
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
    console.log("signature error", error);
    return null;
  }
}

const submitHandler = async () => {
  console.log("submit click", dappForm.value);

  const verificationStatus = await checkSignatureVerification();

  console.log("verificationStatus", verificationStatus);

  const body = new FormData();

  // We can append other data to our form data:
  body.append("name", dappForm.name);
  body.append("tagline", dappForm.tagline);
  body.append("description", dappForm.description);
  body.append("chains", JSON.stringify(dappForm.chains));
  body.append("categories", JSON.stringify(dappForm.categories));
  body.append("productType", dappForm.productType);
  body.append("proxies", dappForm.proxies);
  body.append("year", dappForm.year);
  body.append("links", JSON.stringify(dappForm.links));

  // images
  body.append("logo", dappForm.images.logo);
  body.append("banner", dappForm.images.banner);

  dappForm.images?.screenshots.forEach((fileItem, index) => {
    console.log(fileItem);
    body.append(`screenshot-${index + 1}`, fileItem.file);
  });

  const response = await $fetch("/api/projects", {
    method: "POST",
    body: body,
    headers: {
      Authorization: verificationStatus.token,
    },
  });

  if (response.ok) {
    console.log("api response", response);
    complete.value = true;
  } else {
    setErrors("logoForm", ["The server didn’t like our request."]);
  }
};

///
onMounted(() => {
  window.scroll({
    top: 0,
    left: 0,
  });
});
</script>

<template>
  <SectionColumn>
    <FormKit
      type="form"
      @submit="submitHandler"
      :actions="true"
      :submit-attrs="{
        inputClass: '$reset button filled',
      }"
    >
      <div class="step">
        <OwnerStep :dappForm="dappForm" />
      </div>
      <div class="step">
        <ContentStep :dappForm="dappForm" />
      </div>
      <div class="step">
        <ImageStep :dappForm="dappForm" />
      </div>
      <div class="step">
        <TagStep :dappForm="dappForm" />
      </div>
      <div class="step">
        <ProxyStep :dappForm="dappForm" />
      </div>
      <div class="step">
        <LinksStep :dappForm="dappForm" />
      </div>
      <div class="step">
        <SocialsStep :dappForm="dappForm" />
      </div>
      <div class="step">
        <SocialsStep2 :dappForm="dappForm" />
      </div>
    </FormKit>
  </SectionColumn>
</template>

<style lang="scss">
body:has(main.add-dapp) {
  overflow: hidden;
}

main.add-dapp-2 {
  display: grid;
  align-items: center;

  --fk-margin-outer: 0;
}

form {
  max-height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: mandatory;
  scroll-snap-type: y mandatory;
  scroll-snap-points-y: repeat(calc(100vh - 100px));
  scroll-behavior: smooth;

  & > :is(.step, .formkit-actions) {
    scroll-snap-align: start;
    height: calc(100vh - 100px);
    display: grid;
    gap: 3rem;
    align-content: center;
    padding: 0 2rem;
    //  padding-top: 4rem;
  }

  .formkit-wrapper {
    max-width: unset;
    display: grid;
    align-items: center;

    gap: 1rem;
  }

  .formkit-inner {
    box-shadow: unset;
  }

  input.formkit-input {
    font-size: var(--step-1);
    border-radius: var(--corners);
  }

  button.next {
    justify-self: end;
  }

  .not-valid {
    color: red;
  }
  .valid {
    color: green;
  }
}

form > .formkit-actions {
  justify-content: start;
}

.formkit-step-actions {
  margin-bottom: 0rem !important;
  margin-top: 2rem !important;
  display: none;
}
</style>
