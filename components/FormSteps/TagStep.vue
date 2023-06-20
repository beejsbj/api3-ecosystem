<script setup>
import { useEcosystemStore } from "~/stores/ecosystem";
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";

const ecosystem = useEcosystemStore();

const props = defineProps(["dappForm"]);
</script>

<template>
  <FormKit type="step" name="tags" #default="{ isActiveStep }">
    <FormTransitionSlot :isActiveStep="isActiveStep">
      <div class="step-transition-wrapper">
        <form-field>
          <label class="notice-voice" for="categories"> Category </label>
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
          <label class="notice-voice" for="chains"> Chain </label>
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
          <label class="notice-voice" for="productTypes"> productType </label>
          <Multiselect
            id="productTypes"
            v-model="dappForm.productTypes"
            mode="tags"
            :close-on-select="false"
            :searchable="true"
            :create-option="false"
            :options="ecosystem.productTypes"
          />
        </form-field>
      </div>
    </FormTransitionSlot>
  </FormKit>
</template>

<style>
.multiselect {
  border: unset;
  background: var(--gradient-dark);
  border-radius: var(--corners);
  font-size: var(--step-0);
  padding: 0.5rem;
}
</style>
