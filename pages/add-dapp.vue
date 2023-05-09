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

// const submitHandler = () => {
//   console.log(step.value, route.matched[0].children.length);
//   if (step.value < route.matched[0].children.length) {
//     nextStep();
//     return;
//   }
//   console.log(dappForm.value);
//   ecosystem.addDapp(dappForm.value);
// };

function handleBeforeStepChange(event) {
  const currentStep = event.currentStep;
  const targetStep = event.targetStep;
  const delta = event.delta;

  // Add your transition logic here
  if (delta > 0) {
    // Show the target step
    targetStep.show();
    // Hide the current step
    currentStep.hide();
  } else {
    // Show the current step
    currentStep.show();
    // Hide the target step
    targetStep.hide();
  }
}
</script>

<template>
  {{ step.value }}
  <SectionColumn>
    <ClientOnly>
      <FormKit
        type="form"
        :actions="false"
        @submit="submitHandler"
        button-class="$reset button"
      >
        <FormKit
          type="multi-step"
          tab-style="progress"
          :hide-progress-labels="true"
          stepNext-class="$reset button"
          stepPrevious-class="$reset button"
          button-class="$reset button"
          @beforeStepChange="handleBeforeStepChange"
        >
          <OwnerStep type="step" :dappForm="dappForm" key="1" />
          <ContentStep type="step" :dappForm="dappForm" key="2" />
          <ImageStep type="step" :dappForm="dappForm" key="3" />
          <TagStep type="step" :dappForm="dappForm" key="4" />
          <LinksStep type="step" :dappForm="dappForm" key="5" />
          <StatusStep type="step" :dappForm="dappForm" key="6" />
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
    }
  }

  .notice-voice {
    font-size: var(--step-2);
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
    //  border-bottom: 1px solid var(--ink);
    border-radius: var(--corners);
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -1px;
      left: 0;
      height: 1px;
      width: 100%;
      background: var(--ink);
    }

    &:focus {
      border-bottom: 1px solid var(--ink);
    }

    &:focus::after {
      background: var(--gradient-color);
    }
  }
}

.formkit-step-actions {
  margin-bottom: 0rem !important;
  margin-top: 1rem !important;
}

.form-steps-enter-active,
.form-steps-leave-active {
  transition: opacity 0.5s;
}

.form-steps-enter,
.form-steps-leave-to {
  opacity: 0;
}
</style>
