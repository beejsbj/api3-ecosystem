<script setup>
const props = defineProps(["dappForm"]);
props.dappForm.date = new Date().toISOString().slice(0, 10);
</script>
<template>
  <FormKit type="step" #default="{ isActiveStep }" name="content">
    <FormTransitionSlot :isActiveStep="isActiveStep">
      <div class="step-transition-wrapper">
        <form-field>
          <FormKit
            type="text"
            label="Dapp Name"
            label-class="$reset notice-voice"
            name="dappName"
            placeholder="Dapp Name"
            validation="required"
            id="dappName"
            v-model="dappForm.name"
          />
        </form-field>

        <!-- short description -->
        <form-field>
          <FormKit
            type="text"
            label="Short Description"
            label-class="$reset notice-voice"
            name="shortDescription"
            placeholder="Short Description"
            validation="required"
            id="shortDescription"
            v-model="dappForm.shortDescription"
          />
        </form-field>

        <!-- long description -->
        <form-field>
          <FormKit
            type="textarea"
            rows="5"
            label="Long Description"
            label-class="$reset notice-voice"
            name="longDescription"
            placeholder="Long Description"
            validation="required"
            id="longDescription"
            v-model="dappForm.longDescription"
          />
        </form-field>
      </div>
    </FormTransitionSlot>
  </FormKit>
</template>
