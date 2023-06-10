<script setup>
import { useEcosystemStore } from "~/stores/ecosystem";
const ecosystem = useEcosystemStore();
</script>

<template>
  <PageHeader heading="Style Guide" />
  <SectionColumn>
    <pre>
	<code>
{{ ecosystem.stats }}
	</code>
</pre>
  </SectionColumn>
</template>
