<script setup>
import { useStorage } from "@vueuse/core";
import { setErrors, FormKitMessages } from "@formkit/vue";
import { getValidationMessages } from "@formkit/validation";

//
definePageMeta({
  title: "Add Dapp",
  layout: "home",
  //   middleware: "auth",
});

useServerSeoMeta({
  title: "Add Dapp",
});

//
const dappForm = useStorage("dapp-form", {});
const complete = ref(false);
const messages = ref([]);
const { verifyWallet } = useSiwe();
const { submitProject } = useHttpCalls();

///

function showErrors(node) {
  messages.value = [];
  const validations = getValidationMessages(node);
  validations.forEach((inputMessages) => {
    messages.value = messages.value.concat(
      inputMessages.map((message) => message.value)
    );
  });
}

const submitHandler = async () => {
  const verificationStatus = await verifyWallet();

  console.log("verificationStatus", verificationStatus);

  if (!verificationStatus || !verificationStatus.verified) {
    console.log(
      "verificationStatus signature verification failed",
      verificationStatus
    );
    return;
  }

  const submitResult = await submitProject(dappForm, verificationStatus.token);

  if (submitResult.success) {
    console.log("api response", response);
    complete.value = true;
    delete dappForm.value;
    // dappForm.value = {};
    // setErrors("add-form", ["Project added successfully."]); ??
  } else {
    setErrors("add-form", ["The server didn’t like our request."]);
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
      id="add-form"
      @submit="submitHandler"
      @submit-invalid="showErrors"
      :actions="false"
      #default="{ state: { valid: isValid } }"
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
        <FormKit
          type="submit"
          label="Add Project"
          input-class="$reset button filled"
        />
        <ul class="validation-errors">
          <FormKitMessages />
          <template v-if="!isValid">
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
