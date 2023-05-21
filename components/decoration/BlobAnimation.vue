<script setup>
/* -- Glow effect -- */

onMounted(() => {
  const blob = document.getElementById("blob");

  window.onpointermove = (event) => {
    const { pageX, pageY } = event;

    blob.animate(
      {
        left: `${pageX}px`,
        top: `${pageY}px`,
      },
      {
        duration: 3000,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );
  };
});
</script>

<template>
  <div class="blob-container">
    <div id="blob"></div>
    <div id="blur"></div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes rotate {
  from {
    rotate: 0deg;
  }

  50% {
    scale: 1 1.5;
  }

  to {
    rotate: 360deg;
  }
}
.blob-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: -2;
}
#blob {
  background-color: white;
  height: 34vmax;
  aspect-ratio: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  background: linear-gradient(to right, var(--color), var(--highlight));
  animation: rotate 20s infinite;
  opacity: 0.15;
  pointer-events: none;
  z-index: -3;
}

#blur {
  height: 100%;
  width: 100%;
  position: absolute;
  backdrop-filter: blur(10vmax);
  pointer-events: none;
}
</style>

<style lang="scss">
html:has(main.index) #blob {
  opacity: 0.4;
  height: 24vmax;
}
</style>
