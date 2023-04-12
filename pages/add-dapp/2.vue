<script setup>
const props = defineProps(["dappForm"]);
</script>
<template>
  <h2 class="attention-voice">Step 2</h2>

  <form-field>
    <label for="projectName">Project Name</label>
    <input
      required
      type="text"
      id="projectName"
      v-model="dappForm.projectName"
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
    />
  </form-field>

  <!-- one line integration  -->
  <form-field>
    <label for="oneLineIntegrationDescription"
      >One Line Integration Description</label
    >
    <input
      required
      type="text"
      id="oneLineIntegrationDescription"
      v-model="dappForm.oneLineIntegrationDescription"
    />
  </form-field>

  <!-- long description -->
  <form-field>
    <label for="longDescription">Long Description</label>
    <textarea
      id="longDescription"
      v-model="dappForm.longDescription"
      rows="5"
    />
  </form-field>

  <!-- published date -->
  <form-field>
    <label for="publishedDate">Published Date</label>
    <input
      required
      type="date"
      id="publishedDate"
      v-model="dappForm.publishedDate"
    />
  </form-field>
</template>
