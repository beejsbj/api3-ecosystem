<script setup>
import { useStorage } from "@vueuse/core";
import { setErrors } from "@formkit/vue";
const ecosystem = useEcosystemStore();
const route = useRoute();
const step = ref({});

//
definePageMeta({
  title: "Add Dapp",
});

//
const dappForm = useStorage("dapp-form", {});
const complete = ref(false);

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
      :actions="false"
      v-auto-animate
      @submit="submitHandler"
    >
      <FormKit
        type="multi-step"
        tab-style="progress"
        :hide-progress-labels="true"
        v-auto-animate
      >
        <OwnerStep :dappForm="dappForm" key="1" />
        <ContentStep :dappForm="dappForm" key="2" />
        <ImageStep :dappForm="dappForm" key="3" />
        <TagStep :dappForm="dappForm" key="4" />
        <ProxyStep :dappForm="dappForm" key="5" />
        <LinksStep :dappForm="dappForm" key="6" />
        <SocialsStep :dappForm="dappForm" key="7" />
        <StatusStep :dappForm="dappForm" key="8" />
      </FormKit>
    </FormKit>
  </SectionColumn>
</template>

<style lang="scss">
main.add-dapp {
  display: grid;
  align-items: center;
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

.formkit-step-actions {
  margin-bottom: 0rem !important;
  margin-top: 2rem !important;
  display: none;
}

.formSteps-enter-active,
.formSteps-leave-active {
  transition: opacity 0.5s ease;
}

.formSteps-enter-from,
.formSteps-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
