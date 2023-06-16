<script setup>
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
  <file-upload>
    <FormKit v-if="!complete" id="logoForm" type="form" @submit="submitHandler">
      <FormKit
        type="file"
        label="Logo"
        name="license"
        help="Please add a logo"
        accept=".jpg,.png,.pdf,.svg"
        validation="required"
      />
    </FormKit>
    <div v-else class="complete">License upload complete 👍</div>
  </file-upload>
</template>

<style lang="scss" scoped>
file-upload :is(input, form-field) {
  padding: 0;
}

file-upload {
  display: grid;
  // grid-template-rows: 0.3fr 1fr;
  background: var(--gradient-dark);
  --ink: hsla(180, 0%, 95%, 1);
  //   border: 1px solid var(--ink);
  border-radius: var(--corners);
  gap: 10px;
  min-height: 300px;
  padding: 1rem;
  align-items: start;
}

ul.preview-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
