<script setup>
const props = defineProps(["dappForm"]);
props.dappForm.images = props.dappForm.images ?? {};

function setLogo(file) {
  props.dappForm.images.logo = file;
  // upload to imgur
}

function setBanner(file) {
  props.dappForm.images.banner = file;
}

function setScreenshots(files) {
  props.dappForm.images.screenshot = files;
}
</script>

<template>
  <FormKit type="step" name="images">
    <h3 class="notice-voice">Logo</h3>
    <ImageUpload @setImage="setLogo" :image="dappForm.images.logo" />

    <h3 class="notice-voice">Banner</h3>
    <ImageUpload @setImage="setBanner" :image="dappForm.images.banner" />

    <h3 class="notice-voice">Screenshots</h3>
    <ImageUpload
      @setImage="setScreenshots"
      :image="dappForm.images.screenshot"
      multiple="true"
    />
  </FormKit>
</template>
