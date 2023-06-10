<script setup>
import { gsap } from "gsap";

onMounted(() => {
  //   const pageLoad = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".scrolling-stats",
  //     },
  //   });
  //   pageLoad.set(".scrolling-stats", {
  //     opacity: 1,
  //   });
  //   pageLoad.fromTo(
  //     ".scrolling-stats :is(h2, .text-content, .graphic)",
  //     {
  //       y: 50,
  //       opacity: 0,
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: 0.5,
  //       ease: "power4.out",
  //       stagger: 0.25,
  //     }
  //   );
});

function handleScroll(event) {
  //console log if i am scrolling up or down
  console.log(event.deltaY);
}
</script>

<template>
  <SectionColumn class="scrolling-stats" @scroll="handleScroll">
    <h2 class="loud-voice">Why Statistics?</h2>
    <scrolling-section>
      <article>
        <div class="text-content">
          <p class="notice-voice">
            Statistics are a great way to show off your project's growth and
            success.
          </p>
          <p class="notice-voice">
            They can also be used to show off your project's growth and success.
          </p>
          <p class="notice-voice">
            They can also be used to show off your project's growth and success.
          </p>
        </div>
        <div class="graphic">
          <picture>
            <img src="@/assets/images/square.jpg" />
          </picture>
        </div>
      </article>
      <!-- <article>
        <div class="text-content">
          <p class="notice-voice">
            Statistics are a great way to show off your project's growth and
            success.
          </p>
          <p class="notice-voice">
            They can also be used to show off your project's growth and success.
          </p>
          <p class="notice-voice">
            They can also be used to show off your project's growth and success.
          </p>
        </div>
        <div class="graphic">
          <picture> <img src="@/assets/images/square.jpg" /> </picture>
        </div>
      </article>
      <article>
        <div class="text-content">
          <p class="notice-voice">
            Statistics are a great way to show off your project's growth and
            success.
          </p>
          <p class="notice-voice">
            They can also be used to show off your project's growth and success.
          </p>
          <p class="notice-voice">
            They can also be used to show off your project's growth and success.
          </p>
        </div>
        <div class="graphic">
          <picture> <img src="@/assets/images/square.jpg" /> </picture>
        </div>
      </article> -->
    </scrolling-section>
  </SectionColumn>
</template>

<style scoped lang="scss">
scrolling-section {
  display: grid;
}
article {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  .text-content {
    display: grid;
    gap: 1rem;
    p {
      min-height: 100%;
    }
  }
}
</style>
<style>
.scrolling-stats,
.scrolling-stats :is(h2, .text-content, .graphic) {
  /* opacity: 0; */
}
</style>
