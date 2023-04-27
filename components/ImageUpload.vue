<script setup>
import { useFileDialog } from "@vueuse/core";

const emit = defineEmits(["setImage"]);
const props = defineProps(["image"]);

const previewedImage = ref(props.image ?? null);

const { files, open, reset } = useFileDialog({
  accept: ".jpg, .jpeg, .png",
  multiple: false,
});

watch(files, () => {
  if (files.value?.item(0)) {
    previewImage(files.value?.item(0));
  }
});

function resetImage() {
  reset();
  previewedImage.value = null;
}

function previewImage(file) {
  if (file.size > 1000000) {
    alert("File size is too large. Please upload a file less than 1MB.");
    reset();
    previewedImage.value = null;
    return;
  }
  emit("setImage", file);
  previewedImage.value = URL.createObjectURL(file);
}
</script>

<template>
  <file-upload>
    <input-field class="upload">
      <label for="imageupload"> Upload Image </label>
      <div class="buttons">
        <button class="button" type="button" @click.prevent="open()">
          Choose files
        </button>
        <button
          class="button"
          type="button"
          :disabled="!files"
          @click.prevent="resetImage()"
        >
          Reset
        </button>
      </div>
      <template v-if="files">
        <p>
          You have selected: <b>{{ files.length }} files</b>
        </p>
        <li v-for="file of files" :key="file.name">
          {{ file.name }}
        </li>
      </template>
    </input-field>
    <picture class="preview">
      <img :src="previewedImage" />
    </picture>
  </file-upload>
</template>

<style lang="scss" scoped>
file-upload .preview {
  max-width: 220px;
  max-height: 220px;
}

file-upload :is(input, input-field) {
  padding: 0;
}

file-upload {
  display: grid;
  // grid-template-rows: 0.3fr 1fr;
  gap: 10px;
  min-height: 300px;
  background-color: white;
  padding: 10px;
  align-items: start;
}
</style>
