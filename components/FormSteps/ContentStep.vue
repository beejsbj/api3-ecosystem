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
        label="dApp Name"
        label-class="$reset notice-voice"
        name="dappName"
        placeholder="Insert your dApp name"
        validation="required"
        id="dappName"
        v-model="dappForm.name"
      />
    </form-field>

    <!-- short description -->
    <form-field>
      <FormKit
        type="text"
        label="Tagline"
        label-class="$reset notice-voice"
        name="shortDescription"
        placeholder="Insert a quater-tweet sized description of your dApp"
        help="You will see this on your card"
        validation="required|length:60"
        id="shortDescription"
        v-model="dappForm.shortDescription"
      />
    </form-field>

    <!-- long description -->
    <form-field>
      <FormKit
        type="textarea"
        rows="5"
        label="Description"
        label-class="$reset notice-voice"
        name="longDescription"
        placeholder="Insert a longer form description of your dApp"
        help="This is going to be your 'About', it can be a paragraph or two."
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
