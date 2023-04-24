<script setup>
import { useStorage } from "@vueuse/core";
definePageMeta({
  title: "Add Dapp",
});
const dappForm = useStorage("dapp-form", {});

const router = useRouter();
const route = useRoute();
const step = computed(() => route.path[route.path.length - 1]);

const nextStep = () => {
  router.push(`/add-dapp/${Number(step.value) + 1}`);
};
const prevStep = () => {
  router.push(`/add-dapp/${Number(step.value) - 1}`);
};

const handleSubmit = () => {
  if (step.value < route.matched[0].children.length) {
    nextStep();
    return;
  }
  console.log(dappForm.value);
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
        <button class="button" @click="prevStep()" v-if="step > 1">
          Previus
        </button>
        <button class="button">
          <span v-if="step < $route.matched[0].children.length">Next</span>
          <span v-else>Submit</span>
        </button>
      </div>
    </form>
  </SectionColumn>

  <SectionColumn> </SectionColumn>
</template>
