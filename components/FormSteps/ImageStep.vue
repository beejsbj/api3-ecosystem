<script setup>
const props = defineProps(["dappForm"]);
// props.dappForm.images = props.dappForm.images ?? {};

import { setErrors } from "@formkit/vue";

const complete = ref(false);

const submitHandler = async (data) => {
  // We need to submit this as a multipart/form-data
  // to do this we use the FormData API.
  const body = new FormData();
  // We can append other data to our form data:
  body.append("name", data.name);
  // Finally, we append the actual File object(s)
  data.license.forEach((fileItem) => {
    body.append("license", fileItem.file);
  });

  // We'll perform a real upload to httpbin.org
  const res = await fetch("https://httpbin.org/post", {
    method: "POST",
    body: body,
  });

  if (res.ok) {
    complete.value = true;
  } else {
    setErrors("logoForm", ["The server didn’t like our request."]);
  }
};
</script>

<template>
  <FormKit type="step" name="images" #default="{ isActiveStep }">
    <FormTransitionSlot :isActiveStep="isActiveStep">
      <div class="single-images">
        <file-upload>
          <FormKit
            v-if="!complete"
            id="logoForm"
            type="form"
            @submit="submitHandler"
            submit-label="Upload"
          >
            <FormKit
              type="file"
              label="Logo"
              name="logo"
              help="Please add a logo"
              accept=".jpg,.png,.pdf,.svg"
              validation="required"
            />
          </FormKit>
          <div v-else class="complete">License upload complete 👍</div>
        </file-upload>
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
