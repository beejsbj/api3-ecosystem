<script setup>
const props = defineProps(["dappForm"]);

props.dappForm.links = props.dappForm.links ?? {};
</script>

<template>
  <FormKit type="step" name="links" #default="{ isActiveStep }">
    <FormTransitionSlot :isActiveStep="isActiveStep">
      <section class="form-links">
        <h2 class="solid-voice">Links</h2>

        <form-field>
          <FormKit
            type="url"
            id="website"
            v-model="dappForm.links.website"
            label="Website"
            label-class="$reset notice-voice"
            required
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
            required
            placeholder="https://yourdapp.com"
          />
        </form-field>
      </section>
    </FormTransitionSlot>
  </FormKit>
</template>

<style scoped>
div {
  display: inherit;
  gap: inherit;
}
.form-socials {
  display: inherit;
  grid-template-columns: repeat(2, 1fr);
  gap: inherit;
}
.form-socials h2 {
  grid-column: 1 / -1;
  margin-bottom: 2rem;
}
</style>
