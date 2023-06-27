<script setup>
import { useBlogStore } from "~/stores/blog";
import { useEcosystemStore } from "~/stores/ecosystem";
const blog = useBlogStore();
const ecosystem = useEcosystemStore();
</script>

<template>
  <PageHeader heading="Style Guide" />
  <SectionColumn>
    <pre>
		{{ ecosystem.stats }}
	</pre
    >
  </SectionColumn>
</template>
