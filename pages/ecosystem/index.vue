<template>
  <SectionColumn>
    <h1 class="booming-voice">Ecosystem</h1>
  </SectionColumn>

  <SectionColumn innerClass="main-grid">
    <DappFilter />
    <DappGrid />
  </SectionColumn>
</template>

<style>
.ecosystem .main-grid {
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  grid-gap: 1rem;
  align-items: start;
}
</style>
