<script setup>
const props = defineProps(["dappForm"]);
props.dappForm.images = props.dappForm.images ?? {};

const buttonClick = ref(false);
function buttonHandle(valid, direction) {
  formStepButtonHandle(valid, direction, buttonClick);
}

const fileSize = function (node) {
  const maxSize = 3 * 1024 * 1024;

  const fileSizes = node.value.map((file) => file.file.size);

  return fileSizes.every((fileSize) => {
    return fileSize <= maxSize;
  });
};
</script>

<template>
  <FormKit
    type="group"
    #default="{ state: { valid } }"
    v-auto-animate
    name="images"
  >
    <div class="single-images">
      <file-upload>
        <FormKit
          v-auto-animate
          id="logoForm"
          type="file"
          label="Upload your logo"
          label-class="$reset notice-voice"
          name="logo"
          help="This image should be a square and at least 512px wide."
          @change="dappForm.images.logo = $event.target.files[0]"
          accept=".jpg,.png,.jpeg"
          validation="required|fileSize"
          :validation-rules="{ fileSize }"
          :validation-messages="{
            fileSize: 'File size must be below 3MB',
          }"
        />
      </file-upload>
      <file-upload>
        <FormKit
          id="bannerForm"
          type="file"
          label="Upload a branded banner"
          label-class="$reset notice-voice"
          name="banner"
          help="This image should be at least 1024px wide."
          accept=".jpg,.png,.jpeg"
          @change="dappForm.images.banner = $event.target.files[0]"
          v-auto-animate
          validation="required|fileSize"
          :validation-rules="{ fileSize }"
          :validation-messages="{
            fileSize: 'File size must be below 3MB',
          }"
        />
      </file-upload>
    </div>
    <div>
      <file-upload>
        <FormKit
          v-auto-animate
          id="screenShotForm"
          type="file"
          multiple="true"
          label="Upload your Screenshots"
          label-class="$reset notice-voice"
          name="screenshots"
          help="Screenshots of your dApp in action."
          @change="dappForm.images.screenshots = [...$event.target.files]"
          accept=".jpg,.png,.jpeg"
          validation="required|fileSize"
          :validation-rules="{ fileSize }"
          :validation-messages="{
            fileSize: 'Each file must be below 3MB',
          }"
        />
      </file-upload>
    </div>
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

<style lang="scss" scoped>
.single-images {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
}

file-upload {
  display: grid;
  justify-content: start;
  background: var(--gradient-dark);
  --ink: hsla(180, 0%, 95%, 1);
  border-radius: var(--corners);
  gap: 10px;
  padding: 1rem;
  align-items: start;

  :deep([data-type="file"]) {
    input.formkit-input {
      color: var(--white) !important;
      font-size: var(--step--1) !important;

      ul li.formkit-file-item {
        display: grid !important;
        grid-template-columns: 0.25fr 1fr 0.25fr !important;
        align-content: center !important;
      }
    }
  }
}
</style>
