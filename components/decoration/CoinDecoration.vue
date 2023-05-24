<script setup>
import { gsap } from "gsap";
const coins = ref([
  "moonriver",
  "ethereum",
  "ethereum",
  "moonbeam",
  "avalanche",
  "polygon",
  "gnosis",
  "ethereum",
  "solana",
]);

function animateCoins() {
  const coinAnimation = gsap.timeline();

  coinAnimation.to(".coins", {
    duration: 0,
    opacity: 1,
  });
  coinAnimation.from(".coin", {
    duration: 1,
    opacity: 0,
    "--top": 0,
    "--left": 0,
    stagger: 0.1,
    ease: "power4.out",
  });
}
</script>

<template>
  <div class="coins" @mouseenter="animateCoins">
    <div class="coin" v-for="coin in coins">
      <ChainIcon :chain="coin" stroke="var(--color)" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.coins {
  grid-column: 9 / 12;
  grid-row: 1 / span 1;
  aspect-ratio: 1 / 1;
  position: relative;
  top: 50%;
  opacity: 0;

  .coin {
    max-width: 100px;
    position: absolute;

    top: var(--top);
    left: var(--left);
  }
  .coin:nth-of-type(1) {
    --top: -40px;
  }
  .coin:nth-of-type(2) {
    --top: -100px;
    --left: -120px;
  }
  .coin:nth-of-type(3) {
    --top: -40px;
    --left: 120px;
  }
  .coin:nth-of-type(4) {
    --top: 200px;
    --left: -160px;
  }
  .coin:nth-of-type(5) {
    --top: 120px;
    --left: 150px;
  }
  .coin:nth-of-type(6) {
    --top: 70px;
    --left: 20px;
  }
  .coin:nth-of-type(7) {
    --top: 150px;
    --left: -50px;
  }
  .coin:nth-of-type(8) {
    --top: 250px;
    --left: 30px;
  }
  .coin:nth-of-type(9) {
    --top: 50px;
    --left: -180px;
  }
}
</style>
