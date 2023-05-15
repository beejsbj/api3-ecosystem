<script setup>
import { gsap } from "gsap";

const props = defineProps(["isActiveStep"]);

function onEnter(el, done) {
  console.log("enter");
  const formStep = el.closest(".formkit-step");
  const formActions = formStep.querySelector(".formkit-step-actions");
  formActions.style.display = "flex";
  formStep.querySelectorAll("button").forEach((button) => {
    button.classList = "button";
  });
  gsap.fromTo(
    formStep,
    { y: "10vh", opacity: 0, delay: 5 },

    {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: "power2.out",
      onComplete: done,
    }
  );
}

function onLeave(el, done) {
  console.log("leave");
  const formStep = el.closest(".formkit-step");
  const formActions = formStep.querySelector(".formkit-step-actions");

  formActions.style.display = "none";

  gsap.to(formStep, {
    duration: 0.5,
    y: "-100%",
    //  opacity: 0,
    ease: "power2.out",
    onComplete: done,
  });
}
</script>

<template>
  <Transition name="formSteps" @enter="onEnter" @leave="onLeave" :css="false">
    <div v-if="isActiveStep">
      <slot />
    </div>
  </Transition>
</template>
