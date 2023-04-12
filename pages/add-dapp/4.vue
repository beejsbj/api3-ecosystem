<script setup>
const props = defineProps(["dappForm"]);
</script>
<template>
  <h2 class="attention-voice">Step 4</h2>

  <form-field>
    <label for="website">Website</label>
    <input required type="text" id="website" v-model="dappForm.website" />
  </form-field>

  <form-field>
    <label for="twitter">Twitter</label>
    <input type="text" id="twitter" v-model="dappForm.twitter" />
  </form-field>

  <!-- discord -->
  <form-field>
    <label for="discord">Discord</label>
    <input type="text" id="discord" v-model="dappForm.discord" />
  </form-field>

  <!-- github -->

  <form-field>
    <label for="github">Github</label>
    <input type="text" id="github" v-model="dappForm.github" />
  </form-field>

  <!-- reddit -->

  <form-field>
    <label for="reddit">Reddit</label>
    <input type="text" id="reddit" v-model="dappForm.reddit" />
  </form-field>

  <!-- telegram -->

  <form-field>
    <label for="telegram">Telegram</label>
    <input type="text" id="telegram" v-model="dappForm.telegram" />
  </form-field>

  <!-- youtube -->

  <form-field>
    <label for="youtube">Youtube</label>
    <input type="text" id="youtube" v-model="dappForm.youtube" />
  </form-field>

  <!-- blog -->

  <form-field>
    <label for="blog">Blog</label>
    <input type="text" id="blog" v-model="dappForm.blog" />
  </form-field>
</template>
