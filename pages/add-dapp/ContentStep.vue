<script setup>
definePageMeta({
  params: [2],
});

const props = defineProps(["dappForm"]);
props.dappForm.date = new Date().toISOString().substr(0, 10);
</script>
<template>
  <h2 class="attention-voice">Step 2</h2>
  <h3 class="notice-voice">dapp's content</h3>

  <form-field>
    <label for="name">Project Name</label>
    <input required type="text" id="name" v-model="dappForm.name" />
  </form-field>

  <!-- one line integration  -->
  <form-field>
    <label for="tagline">One Line Description</label>
    <input
      required
      type="text"
      id="tagline"
      v-model="dappForm.tagline"
      placeholder="tagline"
    />
  </form-field>

  <!-- short description -->
  <form-field>
    <label for="shortDescription">Short Description</label>
    <input
      required
      type="text"
      id="shortDescription"
      v-model="dappForm.shortDescription"
      placeholder="card description"
    />
  </form-field>

  <!-- long description -->
  <form-field>
    <label for="about">Long Description</label>
    <textarea
      id="about"
      v-model="dappForm.about"
      rows="5"
      placeholder="What is this About?"
    />
  </form-field>

  <!-- published date -->
  <form-field>
    <label for="date">Published Date</label>
    <input required type="date" id="date" v-model="dappForm.date" />
  </form-field>
</template>
