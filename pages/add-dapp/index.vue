<script setup>
definePageMeta({
  params: [1],
  alias: "OwnerStep",
});

const props = defineProps(["dappForm"]);
props.dappForm.owner = props.dappForm.owner ?? {};
</script>
<template>
  <h2 class="attention-voice">Step 1</h2>
  <h3 class="notice-voice">information of the owner</h3>

  <form-field>
    <label for="name">Name</label>
    <input required type="text" id="name" v-model="dappForm.owner.name" />
  </form-field>

  <form-field>
    <FormKit
      type="text"
      label="Email"
      name="email"
      placeholder="email@domain.com"
      validation="required|email"
      id="email"
      v-model="dappForm.owner.email"
    />
  </form-field>

  <form-field>
    <label for="company">Company</label>
    <input required type="text" id="company" v-model="dappForm.owner.company" />
  </form-field>
</template>
