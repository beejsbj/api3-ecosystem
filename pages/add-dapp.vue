<script setup>
import { useStorage } from "@vueuse/core";

//
const ecosystem = useEcosystemStore();
const route = useRoute();

//
definePageMeta({
  title: "Add Dapp",
});

//
const dappForm = useStorage("dapp-form", {});

const submitHandler = () => {
  console.log(step.value, route.matched[0].children.length);
  if (step.value < route.matched[0].children.length) {
    nextStep();
    return;
  }
  console.log(dappForm.value);
  ecosystem.addDapp(dappForm.value);
};
</script>

<template>
  <SectionColumn>
    <ClientOnly>
      <FormKit type="form" :actions="false" @submit="submitHandler">
        <FormKit
          type="multi-step"
          tab-style="progress"
          :hide-progress-labels="true"
          stepNext-class="$reset button"
          stepPrevious-class="$reset button"
          button-class="$reset button"
        >
          <OwnerStep :dappForm="dappForm" />
          <ContentStep :dappForm="dappForm" />
          <ImageStep :dappForm="dappForm" />
          <TagStep :dappForm="dappForm" />
          <LinksStep :dappForm="dappForm" />
          <StatusStep :dappForm="dappForm" />
        </FormKit>
      </FormKit>
    </ClientOnly>
  </SectionColumn>
</template>

<style>
.formkit-step-actions {
  margin-bottom: 0rem !important;
  margin-top: 1rem !important;
}
</style>
