<script setup>
import { useBlogStore } from "~/stores/blog";
import { useEcosystemStore } from "~/stores/ecosystem";
import { watchAccount } from "@wagmi/core";

const blog = useBlogStore();
const ecosystem = useEcosystemStore();

//get account info in a ref to keep watchful
const account = ref({});
const unwatch = watchAccount((acc) => {
  account.value = { ...acc };
});
</script>

<template>
  <PageHeader heading="Style Guide" />
  <SectionColumn>
    <pre>
		{{ account }}
	 </pre
    >
  </SectionColumn>
</template>
