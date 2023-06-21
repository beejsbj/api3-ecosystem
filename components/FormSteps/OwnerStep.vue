<script setup>
const props = defineProps(["dappForm"]);
props.dappForm.owner = props.dappForm.owner ?? {};

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
    name="owner"
  >
    <form-field>
      <FormKit
        type="text"
        label="Name"
        label-class="$reset notice-voice"
        name="name"
        placeholder="John Doe"
        validation="required"
        id="name"
        v-model="dappForm.owner.name"
      />
    </form-field>

    <form-field>
      <FormKit
        type="text"
        label="Company"
        label-class="$reset notice-voice"
        name="company"
        placeholder="Company inc."
        validation="required"
        id="company"
        v-model="dappForm.owner.company"
      />
    </form-field>

    <div class="actions">
      <button
        v-show="false"
        class="button previous"
        @click.prevent="buttonHandle(valid, -1)"
      >
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
