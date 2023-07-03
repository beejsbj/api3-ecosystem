<script setup>
function submitHandler() {}
</script>

<template>
  <PageHeader heading="Add Article" />
  <SectionColumn>
    <file-upload>
      <FormKit type="form" @submit="submitHandler">
        <FormKit
          v-auto-animate
          id="article-form"
          type="file"
          label="upload article"
          label-class="$reset notice-voice"
          name="logo"
          help="This image should be a square and at least 512px wide."
          accept=".md"
          validation="required"
        />
      </FormKit>
    </file-upload>
  </SectionColumn>
</template>
