<script setup>
const coins = ref(["ethereum", "solana", "polygon"]);
</script>

<template>
  <div class="coins">
    <div class="coin" v-for="coin in coins">
      <ChainIcon :chain="coin" fill="var(--color)" />
    </div>
  </div>
</template>

<style scoped>
.coins {
  grid-column: 9 / 12;
  grid-row: 1 / span 2;

  .coin {
    max-width: 50px;
  }
}
</style>
