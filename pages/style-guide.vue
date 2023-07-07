<script setup>
const { account } = useWeb3();
</script>

<template>
  <PageHeader heading="Style Guide" />
  <SectionColumn>
    {{ account }}
  </SectionColumn>
</template>
