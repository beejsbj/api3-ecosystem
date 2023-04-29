<script setup>
const props = defineProps(["dappForm"]);
</script>

<template>
  <FormKit type="step" name="status">
    <form-field>
      <FormKit
        v-model="dappForm.liveOrIntent"
        type="radio"
        id="live-or-intent"
        label="Status of project - Live or Intent Are you live on main net now, or are you announcing your intent."
        legend-class="$reset notice-voice"
        required
        :options="['live', 'intent']"
      />
    </form-field>
    <template #stepNext>
      <FormKit type="submit" />
    </template>
  </FormKit>
</template>

<style></style>
