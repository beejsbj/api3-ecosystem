<script setup></script>

<template>
  <SectionColumn>
    <h2 class="loud-voice">Why Statistics?</h2>
    <scrolling-section>
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
    </scrolling-section>
  </SectionColumn>
</template>

<style scoped lang="scss">
scrolling-section {
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
