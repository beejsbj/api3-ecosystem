<script setup>
import { useEcosystemStore } from "~/stores/ecosystem";
const ecosystem = useEcosystemStore();
</script>

<template>
  <PageHeader heading="Style Guide" />
  <SectionColumn>
    <pre>
	<code>
{{ ecosystem.error }}
	</code>
</pre>
  </SectionColumn>
</template>
