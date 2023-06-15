<script setup>
import { useBlogStore } from "~/stores/blog";
const blog = useBlogStore();
</script>

<template>
  <PageHeader heading="Style Guide" />
  <SectionColumn>
    <button class="button" @click="blog.serverPage -= 1">Next page</button>
    <pre>
		page: {{ blog.serverPage }}
	<code>

{{blog.list}}

	</code>
</pre>
  </SectionColumn>
</template>
