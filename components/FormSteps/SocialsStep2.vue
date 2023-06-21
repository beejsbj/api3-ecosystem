<script setup>
const props = defineProps(["dappForm"]);

props.dappForm.links.socials = props.dappForm.links.socials ?? {};

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
    name="socialLinks2"
  >
    <section class="form-socials">
      <h2 class="solid-voice">More Socials</h2>

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
.form-socials {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
.form-socials h2 {
  grid-column: 1 / -1;
}
</style>
