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
  <FormKit type="step" name="images" #default="{ isActiveStep }">
    <FormTransitionSlot :isActiveStep="isActiveStep">
      <div class="single-images">
        <div>
          <label class="notice-voice">Logo</label>
          <ImageUpload
            @setImage="setLogo"
            :image="dappForm.images.logo"
            :ratio="1 / 1"
            id="logo-upload"
          />
        </div>

        <div>
          <label class="notice-voice">Banner</label>
          <ImageUpload
            @setImage="setBanner"
            :image="dappForm.images.banner"
            id="banner-upload"
          />
        </div>
      </div>

      <div>
        <label class="notice-voice">Screenshots</label>
        <ImageUpload
          @setImage="setScreenshots"
          :image="dappForm.images.screenshot"
          multiple="true"
          id="screenshot-upload"
        />
      </div>
    </FormTransitionSlot>
  </FormKit>
</template>

<style lang="scss" scoped>
.single-images {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
}
div {
}
</style>
