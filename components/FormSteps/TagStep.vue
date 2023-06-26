<script setup>
import { useEcosystemStore } from "~/stores/ecosystem";
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";

const ecosystem = useEcosystemStore();

const props = defineProps(["dappForm"]);

const buttonClick = ref(false);
function buttonHandle(valid, direction) {
  formStepButtonHandle(valid, direction, buttonClick);
}
</script>

<template>
  <FormKit
    type="group"
    #default="{ state: { valid } }"
    v-auto-animate
    name="tags"
  >
    <form-field>
      <label class="notice-voice" for="categories"> Select category </label>
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
      <label class="notice-voice" for="chains"> Select chains </label>
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
      <label class="notice-voice" for="productType">
        select the service used
      </label>
      <Multiselect
        id="productTypes"
        v-model="dappForm.productType"
        mode="tags"
        :close-on-select="false"
        :searchable="true"
        :create-option="false"
        :options="ecosystem.productType"
      />
    </form-field>
    <div class="actions">
      <button class="button previous" @click.prevent="buttonHandle(valid, -1)">
        Previous
      </button>
      <button class="button next" @click.prevent="buttonHandle(valid, 1)">
        Next
      </button>
    </div>
    <template v-if="buttonClick">
      <p v-if="!valid" class="not-valid">
        Your account details are not complete!
      </p>
      <p v-else class="valid">It all looks good 👍</p>
    </template>
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
