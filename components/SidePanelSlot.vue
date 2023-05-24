<script setup>
import { gsap } from "gsap";
const props = defineProps(["showPanel"]);

watch(
  () => props.showPanel,
  (newVal) => {
    if (newVal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
);

function onBeforeEnter(el, done) {
  gsap.fromTo(
    el,
    {
      x: "100%",
    },
    {
      x: "0%",
      duration: 0.3,
      onComplete: done,
    }
  );
}

function onEnter(el, done) {
  const $as = el.querySelectorAll("nav .text");
  const $buttons = el.querySelector("nav .button");
  const timeline = gsap.timeline();

  timeline
    .fromTo(
      $as,
      {
        x: "100%",
        ease: "linear",
      },
      {
        delay: 0.3,
        x: "0%",
        duration: 0.3,
        stagger: 0.1,
        ease: "linear",
      }
    )
    .fromTo(
      $buttons,
      {
        y: "50vh",
        ease: "linear",
      },
      {
        y: "0%",
        duration: 0.3,
        stagger: 0.1,
        ease: "linear",
        onComplete: done,
      },
      "-=0.3"
    );
}

function onLeave(el, done) {
  gsap.fromTo(
    el,
    {
      ease: "linear",
      x: "0%",
    },
    {
      x: "100%",
      duration: 0.5,
      ease: "linear",
      onComplete: done,
    }
  );
}
</script>

<template>
  <Teleport to="body">
    <Transition
      name="panel"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
      :css="false"
    >
      <div v-if="showPanel" class="panel-mask">
        <div class="panel-content" @click="$emit('toggle')">
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.panel-enter-from,
.panel-leave-to {
  transform: translateX(100%);
}

.panel-mask {
  position: fixed;
  z-index: 9998;
  inset: 0;
  background: var(--gradient-dark);
  transition: all 0.3s ease;

  display: grid;
  grid-template-rows: auto;
}

.panel-content {
  display: grid;
  align-items: end;
  padding: 8rem 2rem;
}
</style>
