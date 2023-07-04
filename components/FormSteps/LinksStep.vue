<script setup>
const props = defineProps(["dappForm"]);

props.dappForm.links = props.dappForm.links ?? {};

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
    name="links"
  >
    <section class="form-links">
      <h2 class="solid-voice">Links</h2>

      <form-field>
        <FormKit
          type="url"
          id="website"
          v-model="dappForm.links.website"
          label="Website"
          label-class="$reset notice-voice"
          validation="url"
          placeholder="https://yourwebsite.com"
        />
      </form-field>

      <form-field>
        <FormKit
          type="url"
          validation="url"
          id="dapp"
          v-model="dappForm.links.dapp"
          label="App"
          label-class="$reset notice-voice"
          placeholder="https://yourdapp.com"
        />
      </form-field>

      <form-field>
        <FormKit
          type="url"
          validation="url"
          id="docs"
          v-model="dappForm.links.docs"
          label="Docs"
          label-class="$reset notice-voice"
          placeholder="https://docs.api3.org/"
        />
      </form-field>

      <form-field>
        <FormKit
          type="url"
          validation="url"
          id="explorer"
          v-model="dappForm.links.explorer"
          label="Explorer"
          label-class="$reset notice-voice"
          placeholder="https://etherscan.io/"
        />
      </form-field>
    </section>
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

<style scoped>
.form-links {
  display: inherit;
  gap: inherit;
}
</style>
