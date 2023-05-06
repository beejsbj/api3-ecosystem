<script setup>
/* -- Glow effect -- */

onMounted(() => {
  const blob = document.getElementById("blob");

  window.onpointermove = (event) => {
    const { clientX, clientY } = event;

    blob.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
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

<style scoped>
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
  /* border-radius: 50%; */
  background: linear-gradient(to right, aquamarine, mediumpurple);
  animation: rotate 20s infinite;
  opacity: 0.5;
  pointer-events: none;
}

#blur {
  height: 100%;
  width: 100%;
  position: absolute;
  /* z-index: ; */
  backdrop-filter: blur(12vmax);
  pointer-events: none;
}
</style>
