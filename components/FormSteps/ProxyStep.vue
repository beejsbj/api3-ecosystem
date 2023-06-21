<script setup>
// import { useEcosystemStore } from "~/stores/ecosystem";

// const ecosystem = useEcosystemStore();

const props = defineProps(["dappForm"]);

props.dappForm.proxies = props.dappForm.proxies ?? [
  {
    proxyAddress: "",
    isOEV: false,
  },
];

const proxyTemplate = {
  proxyAddress: "",
  isOEV: false,
};

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
    name="proxy"
  >
    <!-- <ul class="proxy-table" v-auto-animate>
        <button
          class="icon"
          @click.prevent="dappForm.proxies.push({ ...proxyTemplate })"
        >
          +
        </button>
        <li class="row" v-for="(proxy, index) in dappForm.proxies">
          <form-field>
            <FormKit
              type="checkbox"
              label="Is it OEV?"
              label-class="$reset notice-voice"
              name="oevBeneficiary"
              placeholder="OEV Beneficiary"
              validation="required"
              id="oevBeneficiary"
              v-model="proxy.isOEV"
            />
          </form-field>
          <form-field>
            <FormKit
              type="text"
              label="Proxy Address"
              label-class="$reset notice-voice"
              name="proxyAddress"
              placeholder="Proxy Address"
              validation="required"
              id="proxyAddress"
              v-model="proxy.proxyAddress"
            />
          </form-field>
          <button
            class="icon"
            @click.prevent="dappForm.proxies.splice(index, 1)"
          >
            <picture>
              <img src="@/assets/images/icon-cross.svg" alt="" />
            </picture>
          </button>
        </li>
      </ul> -->
    <FormKit
      id="repeater"
      name="proxy"
      type="repeater"
      label="Proxy"
      :insert-control="true"
      :add-button="false"
      #default="{ index }"
    >
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
      <form-field>
        <FormKit
          type="text"
          label="Proxy Address"
          label-class="$reset notice-voice"
          name="proxyAddress"
          placeholder="Proxy Address"
          validation="required"
          id="proxyAddress"
        />
      </form-field>
    </FormKit>
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

<style scoped lang="scss">
.proxy-table {
  display: grid;
  gap: 1rem;
  align-items: end;

  li.row {
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.1fr;
    gap: 1rem;
  }

  button {
    justify-self: end;
    align-self: center;
    background-color: var(--paper);
  }

  img {
    width: 25px;
  }
}
</style>
