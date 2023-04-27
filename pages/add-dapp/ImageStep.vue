<script setup>
definePageMeta({
  params: [2],
});

const props = defineProps(["dappForm"]);
props.dappForm.images = props.dappForm.images ?? {};

function setLogo(file) {
  props.dappForm.images.logo = file;
  // upload to imgur
}

function setBanner(file) {
  props.dappForm.images.banner = file;
}
</script>

<template>
  <h2 class="attention-voice">Step 2</h2>
  <h3 class="notice-voice">images of the dapp</h3>

  <ImageUpload @setImage="setLogo" :image="dappForm.images.logo" />

  <ImageUpload @setImage="setBanner" :image="dappForm.images.banner" />

  {{ dappForm.images.logo }}
</template>
