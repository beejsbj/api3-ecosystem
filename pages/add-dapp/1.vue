<script setup>
const props = defineProps(["dappForm"]);
</script>
<template>
  <h2 class="attention-voice">Step 1</h2>

  <form-field>
    <label for="name">Name</label>
    <input required type="text" id="name" v-model="dappForm.name" />
  </form-field>

  <form-field>
    <label for="email">Email</label>
    <input required type="email" id="email" v-model="dappForm.email" />
  </form-field>

  <form-field>
    <label for="company">Company</label>
    <input required type="text" id="company" v-model="dappForm.company" />
  </form-field>
</template>
