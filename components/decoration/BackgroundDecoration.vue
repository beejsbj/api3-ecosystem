<template>
  <picture class="decoration bottom">
    <DecorationTriangle />
  </picture>
</template>

<style scoped>
.decoration {
  z-index: -1;
  pointer-events: none;

  opacity: 0.15;
  width: 100%;
  position: fixed;
}
.decoration.top {
  top: -5vmax;
  right: -15vmax;

  max-width: 50vmax;
  rotate: 270deg;
}

.decoration.bottom {
  bottom: 5vmax;
  left: -15vmax;

  max-width: 30vmax;
  rotate: 180deg;
}
</style>
