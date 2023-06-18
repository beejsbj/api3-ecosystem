<script setup>
const props = defineProps(["dappForm"]);
</script>

<template>
  <FormKit type="step" name="status" #default="{ isActiveStep }">
    <FormTransitionSlot :isActiveStep="isActiveStep">
      <form-field>
        <FormKit
          v-model="dappForm.status"
          type="radio"
          id="status"
          label="Status of project - Is you dApp live or in development?"
          label-class="$reset notice-voice"
          legend-class="$reset solid-voice"
          required
          :options="[
            { label: 'Inactive', value: 'inactive' },
            { label: 'Live', value: 'active' },
            { label: 'In Development', value: false },
          ]"
        />
      </form-field>
    </FormTransitionSlot>
    <FormKit #stepNext type="submit" />
  </FormKit>
</template>

<style></style>
