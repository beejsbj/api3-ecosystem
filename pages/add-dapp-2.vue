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

///
</script>

<template>
  <SectionColumn>
    <FormKit
      type="form"
      @submit="submitHandler"
      :submit-attrs="{
        inputClass: '$reset loud-button',
      }"
    >
      <div class="step">
        <h2 class="attention-voice">Step 1</h2>
      </div>
      <div class="step">
        <h2 class="attention-voice">Step 2</h2>
      </div>
      <div class="step">
        <h2 class="attention-voice">Step 3</h2>
      </div>
      <div class="step">
        <h2 class="attention-voice">Step 4</h2>
      </div>
      <div class="step">
        <h2 class="attention-voice">Step 5</h2>
      </div>
    </FormKit>
  </SectionColumn>
</template>

<style lang="scss">
main.add-dapp {
  display: grid;
  align-items: center;

  --fk-margin-outer: 0;
}

form {
  max-height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: mandatory;
  scroll-snap-type: y mandatory;
  scroll-snap-points-y: repeat(100vh);

  & > .step {
    scroll-snap-align: start;
    height: 100vh;
    display: grid;
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
