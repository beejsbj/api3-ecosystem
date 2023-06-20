<script setup>
const props = defineProps(["dappForm"]);

props.dappForm.links.socials = props.dappForm.links.socials ?? {};
</script>

<template>
  <FormKit type="step" name="socialLinks" #default="{ isActiveStep }">
    <FormTransitionSlot :isActiveStep="isActiveStep">
      <section class="form-socials">
        <h2 class="solid-voice">Socials</h2>
        <form-field>
          <FormKit
            type="url"
            validation="url"
            id="twitter"
            v-model="dappForm.links.socials.twitter"
            label="Twitter"
            label-class="$reset notice-voice"
            placeholder="https://twitter.com/yourdapp"
          />
        </form-field>

        <form-field>
          <FormKit
            type="url"
            validation="url"
            id="discord"
            v-model="dappForm.links.socials.discord"
            label="Discord"
            label-class="$reset notice-voice"
            placeholder="https://discord.gg/yourdapp"
          />
        </form-field>

        <form-field>
          <FormKit
            type="url"
            validation="url"
            id="github"
            v-model="dappForm.links.socials.github"
            label="Github"
            label-class="$reset notice-voice"
            placeholder="github.com/yourdapp"
          />
        </form-field>

        <form-field>
          <FormKit
            type="url"
            validation="url"
            id="reddit"
            v-model="dappForm.links.socials.reddit"
            label="Reddit"
            label-class="$reset notice-voice"
            placeholder="https://reddit.com/r/yourdapp"
          />
        </form-field>

        <form-field>
          <FormKit
            type="url"
            validation="url"
            id="telegram"
            v-model="dappForm.links.socials.telegram"
            label="Telegram"
            label-class="$reset notice-voice"
            placeholder="https://t.me/yourdapp"
          />
        </form-field>

        <form-field>
          <FormKit
            type="url"
            validation="url"
            id="facebook"
            v-model="dappForm.links.socials.facebook"
            label="Facebook"
            label-class="$reset notice-voice"
            placeholder="https://facebook.com/yourdapp"
          />
        </form-field>

        <form-field>
          <FormKit
            type="url"
            validation="url"
            id="instagram"
            v-model="dappForm.links.socials.instagram"
            label="Instagram"
            label-class="$reset notice-voice"
            placeholder="https://instagram.com/yourdapp"
          />
        </form-field>

        <form-field>
          <FormKit
            type="url"
            validation="url"
            id="youtube"
            v-model="dappForm.links.socials.youtube"
            label="Youtube"
            label-class="$reset notice-voice"
            placeholder="https://youtube.com/yourdapp"
          />
        </form-field>

        <form-field>
          <FormKit
            type="url"
            validation="url"
            id="blog"
            v-model="dappForm.links.socials.blog"
            label="Blog"
            label-class="$reset notice-voice"
            placeholder="https://yourdapp.com/blog"
          />
        </form-field>
      </section>
    </FormTransitionSlot>
  </FormKit>
</template>

<style scoped>
.form-socials {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
.form-socials h2 {
  grid-column: 1 / -1;
}
</style>
