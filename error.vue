<script setup>
console.log("hello world");
const props = defineProps(["error"]);

useHead({
  title: error.statusCode,
});

console.log(props.error);
</script>

<template>
  <SectionColumn class="error-page">
    <h1 class="booming-voice gradient-text">
      {{ error.statusCode }}
    </h1>
    <h2 class="attention-voice">
      {{ error.message }}
    </h2>

    <div class="actions">
      <button class="loud-button firm-voice" @click="$router.go(-1)">
        Go Back
      </button>
      <!-- button to go home -->
      <button class="loud-button firm-voice" @click="$router.push('/')">
        Go Home
      </button>
    </div>

    <details v-auto-animate>
      <summary class="solid-voice">See Error Details</summary>
      <pre>
		<code v-html="error.stack"></code>
	 </pre>
    </details>
  </SectionColumn>
</template>

<style scoped lang="scss">
.error-page {
  display: grid;
  grid-template-rows: 1fr;
  place-items: center;

  h1.booming-voice {
    font-size: var(--step-5);
    padding: 0;
  }

  h2 {
    margin-bottom: 2rem;
  }

  :deep(inner-column) {
    display: grid;
    place-items: center;
    gap: 1rem;
  }
}
summary {
  text-align: center;
}
code {
  //   font-size: 12px;
}
</style>
