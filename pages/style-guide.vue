<script setup>
const ecosystem = useEcosystemStore();
</script>

<template>
  <PageHeader heading="Style Guide" />
  <SectionColumn>
    <pre>

		{{ ecosystem.chainOptions }}
	 </pre
    >
  </SectionColumn>
</template>
