<template>
  <header>
    <SectionColumn class="mast-head">
      <mast-head>
        <picture class="logo">
          <img src="@/assets/images/logo.webp" alt="" />
        </picture>
        <SiteNav />
      </mast-head>
    </SectionColumn>
    <div class="teleport-target"></div>
  </header>
</template>

<style lang="scss" scoped>
mast-head {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  justify-content: space-between;
  .logo {
    width: 100px;
  }
}
</style>
