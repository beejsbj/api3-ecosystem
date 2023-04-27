<script setup>
import { useStorage } from "@vueuse/core";

//
const ecosystem = useEcosystemStore();
const router = useRouter();
const route = useRoute();

//
definePageMeta({
  title: "Add Dapp",
});

//
const dappForm = useStorage("dapp-form", {});

const orderedSteps = [
  null,
  "OwnerStep",
  "ContentStep",
  "ImageStep",
  "LinksStep",
  "TagStep",
  "StatusStep",
];

const step = computed(() => {
  //  if fullpath is /add-dapp return 0 else check index
  console.log(route.name);
  if (route.name === "add-dapp") return 1;
  return orderedSteps.indexOf(route.name.split("-").pop());
});

//
const nextStep = () => {
  console.log(orderedSteps[step.value++]);
  router.push(`/add-dapp/${orderedSteps[step.value + 1]}`);
};
const prevStep = () => {
  router.push(`/add-dapp/${orderedSteps[step.value - 1]}`);
};

const handleSubmit = () => {
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
    <h1 class="booming-voice">Add</h1>
  </SectionColumn>

  <SectionColumn>
    <form @submit.prevent="handleSubmit()">
      <NuxtPage :dappForm="dappForm" />

      <div class="actions">
        <button class="button" @click.prevent="prevStep()" v-if="step > 1">
          Previous
        </button>

        <button class="button">
          <span v-if="step < $route.matched[0].children.length">Next</span>
          <span v-else>Submit</span>
        </button>
      </div>
    </form>
  </SectionColumn>
</template>
