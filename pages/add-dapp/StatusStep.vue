<script setup>
definePageMeta({
  params: [5],
});
const props = defineProps(["dappForm"]);
</script>

<template>
  <h2 class="attention-voice">Step 5</h2>
  <h3 class="notice-voice">
    Status of project - Live or Intent Are you live on main net now, or are you
    announcing your intent.
  </h3>
  <form-field>
    <div class="radio-group">
      <label>
        <input
          type="radio"
          id="live-or-intent"
          value="live"
          v-model="dappForm.liveOrIntent"
          required
        />
        Live
      </label>
      <label>
        <input
          type="radio"
          id="live-or-intent"
          value="intent"
          v-model="dappForm.liveOrIntent"
          required
        />
        Intent
      </label>
    </div>
  </form-field>
</template>
