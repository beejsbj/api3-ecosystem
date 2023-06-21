<script setup>
import { useStorage } from "@vueuse/core";
import { setErrors } from "@formkit/vue";

//
definePageMeta({
  title: "Add Dapp",
  layout: "home",
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
body:has(main.add-dapp-2) {
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
  scroll-snap-points-y: repeat(calc(100vh - 125px));
  scroll-behavior: smooth;

  & > :is(.step, .formkit-actions) {
    scroll-snap-align: start;
    height: calc(100vh - 125px);
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
  justify-content: end;
}

.formkit-step-actions {
  margin-bottom: 0rem !important;
  margin-top: 2rem !important;
  display: none;
}
</style>
