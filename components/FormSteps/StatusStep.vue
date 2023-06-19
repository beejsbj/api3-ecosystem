<script setup>
const props = defineProps(["dappForm"]);
</script>

<template>
  <FormKit type="step" name="status" #default="{ isActiveStep }">
    <FormTransitionSlot :isActiveStep="isActiveStep">
      <form-field>
        <FormKit
          v-model="dappForm.isLive"
          type="radio"
          id="isLive"
          label="Status of project - Is you dApp live or in development?"
          label-class="$reset notice-voice"
          legend-class="$reset solid-voice"
          required
          :options="[
            { label: 'Live', value: true },
            { label: 'In Development', value: false },
          ]"
        />
      </form-field>
    </FormTransitionSlot>
    <FormKit #stepNext type="submit" />
  </FormKit>
</template>

<style></style>
