<script setup>
import { useFileDialog } from "@vueuse/core";

const emit = defineEmits(["setImage"]);
const props = defineProps(["image", "multiple", "ratio"]);
const validationMessage = ref(null);

const { files, open, reset } = useFileDialog({
  accept: ".jpg, .jpeg, .png",
  multiple: props.multiple ?? false,
});

watch(files, () => {
  if (props.multiple) {
    emit("setImage", files.value);
  } else {
    emit("setImage", files.value[0]);
  }
});

function resetImage() {
  reset();
}

function previewImage(file) {
  if (file.size > 100000) {
    validationMessage.value =
      "File size is too large. Please upload a file less than 1MB.";
    reset();
    return;
  }
  //check for aspect ratio
  if (props.ratio) {
    console.log(props.ratio);
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;
      if (width / height !== props.ratio) {
        validationMessage.value = `Image aspect ratio is not ${props.ratio}. Please upload an image with ${props.ratio} aspect ratio.`;
        reset();
        return;
      }
    };
  }

  return URL.createObjectURL(file);
}
</script>

<template>
  <file-upload>
    <form-field class="upload">
      <p class="validation-warn whisper-voice" v-if="validationMessage">
        <strong>{{ validationMessage }}</strong>
      </p>
      <div class="actions">
        <button class="button" type="button" @click.prevent="open()">
          Choose {{ multiple ? "Images" : "Image" }}
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
          You have selected:
          <b>{{ files.length }} {{ multiple ? "Images" : "Image" }}</b>
        </p>
        <ul class="preview-images">
          <li v-for="file of files" :key="file.name">
            <picture class="preview">
              <img :src="previewImage(file)" />
            </picture>
          </li>
        </ul>
      </template>
    </form-field>
  </file-upload>
</template>

<style lang="scss" scoped>
file-upload .preview {
  max-width: 220px;
  max-height: 220px;
}

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
