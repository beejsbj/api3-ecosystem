<script setup>
const props = defineProps(["dappForm"]);

props.dappForm.links = props.dappForm.links ?? {};
props.dappForm.links.socials = props.dappForm.links.socials ?? {};
</script>

<template>
  <FormKit type="step" name="links">
    <h2 class="attention-voice">Links</h2>
    <h3 class="notice-voice">link to the website and app</h3>

    <form-field>
      <FormKit
        type="url"
        id="website"
        v-model="dappForm.links.website"
        label="Website"
        required
        validation="url"
      />
    </form-field>

    <form-field>
      <FormKit
        type="url"
        validation="url"
        id="dapp"
        v-model="dappForm.links.dapp"
        label="App"
        required
      />
    </form-field>

    <section class="form-socials">
      <h2 class="attention-voice">Socials</h2>
      <h3 class="notice-voice">what are your socials?</h3>
      <form-field>
        <FormKit
          type="url"
          validation="url"
          id="twitter"
          v-model="dappForm.links.socials.twitter"
          label="Twitter"
        />
      </form-field>

      <form-field>
        <FormKit
          type="url"
          validation="url"
          id="discord"
          v-model="dappForm.links.socials.discord"
          label="Discord"
        />
      </form-field>

      <form-field>
        <FormKit
          type="url"
          validation="url"
          id="github"
          v-model="dappForm.links.socials.github"
          label="Github"
        />
      </form-field>

      <form-field>
        <FormKit
          type="url"
          validation="url"
          id="reddit"
          v-model="dappForm.links.socials.reddit"
          label="Reddit"
        />
      </form-field>

      <form-field>
        <FormKit
          type="url"
          validation="url"
          id="telegram"
          v-model="dappForm.links.socials.telegram"
          label="Telegram"
        />
      </form-field>

      <form-field>
        <FormKit
          type="url"
          validation="url"
          id="facebook"
          v-model="dappForm.links.socials.facebook"
          label="Facebook"
        />
      </form-field>

      <form-field>
        <FormKit
          type="url"
          validation="url"
          id="instagram"
          v-model="dappForm.links.socials.instagram"
          label="Instagram"
        />
      </form-field>

      <form-field>
        <FormKit
          type="url"
          validation="url"
          id="youtube"
          v-model="dappForm.links.socials.youtube"
          label="Youtube"
        />
      </form-field>

      <form-field>
        <FormKit
          type="url"
          validation="url"
          id="blog"
          v-model="dappForm.links.socials.blog"
          label="Blog"
        />
      </form-field>
    </section>
  </FormKit>
</template>

<style scoped>
.form-socials {
  display: inherit;
  grid-template-columns: repeat(2, 1fr);
  gap: inherit;
}
.form-socials h2 {
  grid-column: 1 / -1;
}
</style>
