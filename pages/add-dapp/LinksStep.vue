<script setup>
definePageMeta({
  params: [4],
});

const props = defineProps(["dappForm"]);

props.dappForm.links = props.dappForm.links ?? {};
props.dappForm.links.socials = props.dappForm.links.socials ?? {};
</script>

<template>
  <h2 class="attention-voice">Links</h2>
  <h3 class="notice-voice">link to the website and app</h3>

  <form-field>
    <label for="website">Website</label>
    <input required type="text" id="website" v-model="dappForm.links.website" />
  </form-field>

  <form-field>
    <label for="website">App</label>
    <input required type="text" id="website" v-model="dappForm.links.dapp" />
  </form-field>

  <section class="form-socials">
    <h2 class="attention-voice">Socials</h2>
    <h3 class="notice-voice">what are your socials?</h3>
    <form-field>
      <label for="twitter">Twitter</label>
      <input
        type="text"
        id="twitter"
        v-model="dappForm.links.socials.twitter"
      />
    </form-field>

    <form-field>
      <label for="discord">Discord</label>
      <input
        type="text"
        id="discord"
        v-model="dappForm.links.socials.discord"
      />
    </form-field>

    <form-field>
      <label for="github">Github</label>
      <input type="text" id="github" v-model="dappForm.links.socials.github" />
    </form-field>

    <form-field>
      <label for="reddit">Reddit</label>
      <input type="text" id="reddit" v-model="dappForm.links.socials.reddit" />
    </form-field>

    <form-field>
      <label for="telegram">Telegram</label>
      <input
        type="text"
        id="telegram"
        v-model="dappForm.links.socials.telegram"
      />
    </form-field>

    <form-field>
      <label for="youtube">Youtube</label>
      <input
        type="text"
        id="youtube"
        v-model="dappForm.links.socials.youtube"
      />
    </form-field>

    <form-field>
      <label for="blog">Blog</label>
      <input type="text" id="blog" v-model="dappForm.links.socials.blog" />
    </form-field>
  </section>
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
