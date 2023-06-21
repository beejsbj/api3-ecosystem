<script setup>
const props = defineProps(["dappForm"]);
props.dappForm.date = new Date().toISOString().slice(0, 10);

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
    name="content"
  >
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
        type="textarea"
        rows="5"
        label="Long Description"
        label-class="$reset notice-voice"
        name="longDescription"
        placeholder="Long Description"
        validation="required"
        id="longDescription"
        v-model="dappForm.longDescription"
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
