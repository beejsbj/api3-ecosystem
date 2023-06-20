<script setup>
import { gsap } from "gsap";
const props = defineProps(["dappForm"]);
props.dappForm.owner = props.dappForm.owner ?? {};
</script>
<template>
  <FormKit type="step" name="owner" #default="{ isActiveStep }">
    <FormTransitionSlot :isActiveStep="isActiveStep">
      <div class="step-transition-wrapper">
        <form-field>
          <FormKit
            type="text"
            label="Name"
            label-class="$reset notice-voice"
            name="name"
            placeholder="John Doe"
            validation="required"
            id="name"
            v-model="dappForm.owner.name"
          />
        </form-field>

        <form-field>
          <FormKit
            type="text"
            label="Company"
            label-class="$reset notice-voice"
            name="company"
            placeholder="Company inc."
            validation="required"
            id="company"
            v-model="dappForm.owner.company"
          />
        </form-field>
      </div>
    </FormTransitionSlot>
  </FormKit>
</template>
