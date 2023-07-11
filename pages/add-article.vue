<script setup>
import { parseMarkdown } from "@/utils/parseMarkdown";

const { verifyWallet } = useSiwe();
const { submitArticle } = useHttpCalls();

async function submitHandler(event) {
  const file = event.article[0].file;
  const reader = new FileReader();

  reader.onload = async function (e) {
    const content = e.target.result;
    const parsed = await parseMarkdown({ content });
    console.log("parsed", parsed);

    const {
      success: verificationSuccess,
      data: verificationData,
      message: verificationError,
    } = await verifyWallet();

    console.log("verificationStatus", {
      verificationSuccess,
      verificationData,
      verificationError,
    });

    if (!verificationSuccess) {
      console.log(
        "verificationStatus signature verification failed",
        verificationSuccess
      );
      return;
    }

    const submitResult = await submitArticle(parsed, verificationData?.token);

    if (submitResult.success) {
      console.log("Article submitted successfully.", submitResult);
    } else {
      //:todo handle error
      console.log("The server didn’t like our request.", submitResult);
    }

    // #todo POST parsed to db
  };

  reader.readAsText(file);
}
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
          name="article"
          help="Upload a markdown formatted file"
          accept=".md"
          validation="required"
        />
      </FormKit>
    </file-upload>
  </SectionColumn>
</template>

<style scoped lang="scss">
file-upload {
  display: grid;
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
