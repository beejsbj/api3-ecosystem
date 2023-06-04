<script setup>
import { useStorage } from "@vueuse/core";

//
const ecosystem = useEcosystemStore();
const route = useRoute();
const step = ref({});

//
definePageMeta({
  title: "Add Dapp",
});

//
const dappForm = useStorage("dapp-form", {});

const submitHandler = () => {
  console.log(dappForm.value);
  console.log("submit");
};
</script>

<template>
  <SectionColumn>
    <ClientOnly>
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
          <LinksStep :dappForm="dappForm" key="5" />
          <SocialsStep :dappForm="dappForm" key="6" />
          <StatusStep :dappForm="dappForm" key="7" />
        </FormKit>
      </FormKit>
    </ClientOnly>
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

  .notice-voice {
    //  font-size: var(--step-1);
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
