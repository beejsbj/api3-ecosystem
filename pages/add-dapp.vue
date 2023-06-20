<script setup>
import { useStorage } from "@vueuse/core";
import { setErrors } from "@formkit/vue";

//
definePageMeta({
  title: "Add Dapp",
});

//
const dappForm = useStorage("dapp-form", {});
const complete = ref(false);
const stepInformation = ref({});

const submitHandler = async () => {
  console.log("submit click", dappForm.value);

  const body = new FormData();

  // We can append other data to our form data:
  body.append("name", dappForm.name);
  body.append("tagline", dappForm.tagline);
  body.append("description", dappForm.description);
  body.append("chains", dappForm.chains);
  body.append("categories", dappForm.categories);
  body.append("productTypes", dappForm.productTypes);
  body.append("proxies", dappForm.proxies);
  body.append("year", dappForm.year);
  body.append("links", dappForm.links);
  body.append("isLive", dappForm.isLive);

  // images
  body.append("logo", dappForm.images.logo);
  body.append("banner", dappForm.images.banner);

  dappForm.images.screenshots.forEach((fileItem, index) => {
    console.log(fileItem);
    body.append(`screenshot-${index + 1}`, fileItem.file);
  });

  const response = await $fetch("/api/projects", {
    method: "POST",
    body,
  });

  if (response.ok) {
    console.log("api response", response);
    complete.value = true;
  } else {
    setErrors("logoForm", ["The server didn’t like our request."]);
  }
};
</script>

<template>
  <SectionColumn>
    <FormKit
      type="form"
      :actions="stepInformation?.value?.targetStepName === 'Status'"
      @submit="submitHandler"
      :submit-attrs="{
        inputClass: '$reset loud-button',
      }"
    >
      <FormKit
        type="multi-step"
        tab-style="progress"
        :hide-progress-labels="true"
        :before-step-change="
          ({ currentStep, targetStep, delta }) => {
            stepInformation.value = {
              currentStepName: currentStep.stepName,
              targetStepName: targetStep.stepName,
              delta,
            };

            return true; // Change to false to block all step changes
          }
        "
      >
        <OwnerStep :dappForm="dappForm" key="1" />
        <ContentStep :dappForm="dappForm" key="2" />
        <ImageStep :dappForm="dappForm" key="3" />
        <TagStep :dappForm="dappForm" key="4" />
        <ProxyStep :dappForm="dappForm" key="5" />
        <LinksStep :dappForm="dappForm" key="6" />
        <SocialsStep :dappForm="dappForm" key="7" />
      </FormKit>
    </FormKit>
  </SectionColumn>
</template>

<style lang="scss">
main.add-dapp {
  display: grid;
  align-items: center;

  --fk-margin-outer: 0;
}

.formkit-outer[data-type="multi-step"] {
  & > .formkit-wrapper {
    max-width: unset;
    display: grid;
    align-items: center;

    @media (min-width: 768px) {
      grid-template-columns: 0.1fr 1fr;
      gap: 3rem;
    }
  }

  & > [data-tab-style="progress"][data-hide-labels="true"] > .formkit-tabs {
    @media (min-width: 768px) {
      display: grid;
      min-height: 500px;

      button.formkit-tab {
        &::after {
          width: 0.25rem;
          height: 100%;
          top: 50%;
          left: 50%;
          transform: translate(-50%);
          top: unset;
        }
      }
    }
  }

  & > [data-tab-style="progress"] > .formkit-steps {
    border: none;
    width: 100%;
    box-shadow: unset;
    padding: unset;
  }

  .formkit-inner {
    box-shadow: unset;
  }

  input.formkit-input {
    font-size: var(--step-1);
    border-radius: var(--corners);
  }
}

form > .formkit-actions {
  justify-self: end;
}

.formkit-step-actions {
  margin-bottom: 0rem !important;
  margin-top: 2rem !important;
  display: none;
}
</style>
