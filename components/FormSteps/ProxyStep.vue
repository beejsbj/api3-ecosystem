<script setup>
// import { useEcosystemStore } from "~/stores/ecosystem";

// const ecosystem = useEcosystemStore();

const props = defineProps(["dappForm"]);

props.dappForm.proxies = props.dappForm.proxies ?? [];

const proxy = ref({
  proxyType: "",
  feedName: "",
  dapiName: "",
  proxyAddress: "",
  oevBeneficiary: "",
  chainId: "",
});

const repeater = ref(1);
</script>

<template>
  <FormKit type="step" name="proxy" #default="{ isActiveStep }">
    <FormTransitionSlot :isActiveStep="isActiveStep">
      <ul class="proxy-table">
        <button class="button" @click="repeater += 1">Add Row</button>
        <li class="row" v-for="count in repeater">
          <form-field>
            <FormKit
              type="checkbox"
              label="Is it OEV?"
              label-class="$reset notice-voice"
              name="oevBeneficiary"
              placeholder="OEV Beneficiary"
              validation="required"
              id="oevBeneficiary"
            />
          </form-field>
          <button class="button" @click="repeater -= 1">Remove</button>
        </li>
      </ul>
    </FormTransitionSlot>
  </FormKit>
</template>

<style scoped lang="scss">
.proxy-table {
  display: grid;
  gap: 1rem;

  li.row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 0.1fr;
    gap: 0.5rem;
  }
}
</style>
