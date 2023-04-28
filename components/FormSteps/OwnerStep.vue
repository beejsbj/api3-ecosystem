<script setup>
const props = defineProps(["dappForm"]);
props.dappForm.owner = props.dappForm.owner ?? {};
</script>
<template>
  <FormKit type="step" name="owner">
    <form-field>
      <FormKit
        type="text"
        label="Name"
        name="name"
        placeholder="John Doe"
        validation="required"
        id="name"
        v-model="dappForm.owner.name"
      />
    </form-field>

    <form-field>
      <FormKit
        type="email"
        label="Email"
        name="email"
        placeholder="email@domain.com"
        validation="required|email"
        id="email"
        v-model="dappForm.owner.email"
      />
    </form-field>

    <form-field>
      <FormKit
        type="text"
        label="Company"
        name="company"
        placeholder="Company inc."
        validation="required"
        id="company"
        v-model="dappForm.owner.company"
      />
    </form-field>
  </FormKit>
</template>
