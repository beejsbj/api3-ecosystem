<template>
  <header>
    <SectionColumn>
      <div class="bar">
        <picture class="logo">
          <img src="@/assets/images/logo.webp" alt="" />
        </picture>
        <SiteNav />
      </div>
    </SectionColumn>
  </header>
</template>

<style scoped>
header .bar {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  justify-content: space-between;
}

header picture {
  width: 100px;
}
</style>
