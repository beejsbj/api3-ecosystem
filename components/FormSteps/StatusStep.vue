<script setup>
const props = defineProps(["dappForm"]);
</script>

<template>
  <FormKit type="step" name="status" #default="{ isActiveStep }">
    <FormTransitionSlot :isActiveStep="isActiveStep">
      <form-field>
        <FormKit
          v-model="dappForm.liveOrIntent"
          type="radio"
          id="live-or-intent"
          label="Status of project - Live or Intent Are you live on main net now, or are you announcing your intent."
          label-class="$reset notice-voice"
          legend-class="$reset solid-voice"
          required
          :options="['live', 'intent']"
        />
      </form-field>
    </FormTransitionSlot>
    <!-- <FormKit #stepNext type="submit" /> -->
  </FormKit>
</template>

<style></style>
