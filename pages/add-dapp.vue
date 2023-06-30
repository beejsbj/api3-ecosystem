<script setup>
import { useStorage } from "@vueuse/core";
import { setErrors, FormKitMessages } from "@formkit/vue";
import { useSiwe } from "~/composables/useSiwe";
import { getValidationMessages } from "@formkit/validation";

//
definePageMeta({
  title: "Add Dapp",
  layout: "home",
  middleware: "auth",
});

useHead({
  title: "Add Dapp",
});

//
const dappForm = useStorage("dapp-form", {});
const complete = ref(false);
const messages = ref([]);
const { verifyWallet } = useSiwe();

///

function showErrors(node) {
  const validations = getValidationMessages(node);
  validations.forEach((inputMessages) => {
    messages.value = messages.value.concat(
      inputMessages.map((message) => message.value)
    );
  });
}

const submitHandler = async () => {
  messages.value = [];
  console.log(dappForm.value);

  const verificationStatus = await verifyWallet();

  console.log("verificationStatus", verificationStatus);

  if (!verificationStatus || !verificationStatus.verified) {
    console.log(
      "verificationStatus signature verification failed",
      verificationStatus
    );
    return;
  }

  const body = new FormData();

  // append dappform to body, dappForm is vue reactive, so needs .value
  body.append("name", dappForm.value.name);
  body.append("tagline", dappForm.value.tagline);
  body.append("description", dappForm.value.description);
  body.append("chains", JSON.stringify(dappForm.value.chains));
  body.append("categories", JSON.stringify(dappForm.value.categories));
  body.append("productType", dappForm.value.productType);
  body.append("proxies", dappForm.value.proxies);
  body.append("year", dappForm.value.year);
  body.append("links", JSON.stringify(dappForm.value.links));

  // images
  body.append("logo", dappForm.value.images.logo);
  body.append("banner", dappForm.value.images.banner);

  dappForm.value.images?.screenshots.forEach((fileItem, index) => {
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
      @submit-invalid="showErrors"
      :actions="false"
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

      <div class="actions">
        <button type="submit" class="button filled">Submit</button>
        <ul class="validation-errors">
          <FormKitMessages />
          <template v-if="messages.length">
            <li v-for="message in messages">{{ message }}</li>
          </template>
        </ul>
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

  & > :is(.step, .actions) {
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

form > .actions {
  justify-items: start;
}

.formkit-step-actions {
  margin-bottom: 0rem !important;
  margin-top: 2rem !important;
  display: none;
}
</style>
