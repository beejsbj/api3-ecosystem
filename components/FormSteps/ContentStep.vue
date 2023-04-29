<script setup>
const props = defineProps(["dappForm"]);
props.dappForm.date = new Date().toISOString().slice(0, 10);
</script>
<template>
  <FormKit type="step" name="content">
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

    <form-field>
      <FormKit
        type="text"
        label="One Line Integration"
        label-class="$reset notice-voice"
        name="oneLineIntegration"
        placeholder="One Line Integration"
        validation="required"
        id="oneLineIntegration"
        v-model="dappForm.oneLineIntegration"
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
        type="text"
        label="Long Description"
        label-class="$reset notice-voice"
        name="longDescription"
        placeholder="Long Description"
        validation="required"
        id="longDescription"
        v-model="dappForm.longDescription"
      />
    </form-field>

    <!-- published date -->
    <form-field>
      <FormKit
        type="date"
        label="Published Date"
        label-class="$reset notice-voice"
        name="publishedDate"
        placeholder="Published Date"
        validation="required"
        id="publishedDate"
        v-model="dappForm.date"
      />
    </form-field>
  </FormKit>
</template>
