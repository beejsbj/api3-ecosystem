<script setup>
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";

const ecosystem = useEcosystemStore();

const props = defineProps(["dappForm"]);
</script>

<template>
  <FormKit type="step" name="tags">
    <h2 class="attention-voice">Step 3</h2>
    <h3 class="notice-voice">tag the dapp</h3>

    <form-field>
      <label class="attention-voice" for="categories"> Category </label>
      <Multiselect
        id="categories"
        v-model="dappForm.categories"
        mode="tags"
        :close-on-select="false"
        :searchable="true"
        :create-option="false"
        :options="ecosystem.categories"
      />
    </form-field>

    <form-field>
      <label class="attention-voice" for="chains"> Chain </label>
      <Multiselect
        id="chains"
        v-model="dappForm.chains"
        mode="tags"
        :close-on-select="false"
        :searchable="true"
        :create-option="false"
        :options="ecosystem.chains"
      />
    </form-field>

    <form-field>
      <label class="attention-voice" for="integrations"> Integration </label>
      <Multiselect
        id="integrations"
        v-model="dappForm.integrations"
        mode="tags"
        :close-on-select="false"
        :searchable="true"
        :create-option="false"
        :options="ecosystem.integrations"
      />
    </form-field>
  </FormKit>
</template>
