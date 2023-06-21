<script setup>
const props = defineProps(["dappForm"]);
props.dappForm.images = props.dappForm.images ?? {};

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
    name="images"
  >
    <div class="single-images">
      <file-upload>
        <FormKit
          id="logoForm"
          type="file"
          label="Logo"
          label-class="$reset notice-voice"
          name="logo"
          help="Please add a logo"
          accept=".jpg,.png,.jpeg"
          validation="required"
          @change="
            console.log($event.target.files[0]);
            dappForm.images.logo = $event.target.files[0];
          "
          v-auto-animate
        />
      </file-upload>
      <file-upload>
        <FormKit
          id="bannerForm"
          type="file"
          label="Banner"
          label-class="$reset notice-voice"
          name="banner"
          help="Please add a banner"
          accept=".jpg,.png,.jpeg"
          validation="required"
          @change="dappForm.images.banner = $event.target.files[0]"
          v-auto-animate
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
