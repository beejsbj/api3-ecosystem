<template>
  <dapp-card>
    <header>
      <picture>
        <img src="@/assets/images/square.jpg" alt="" />
      </picture>

      <p class="status">Live</p>
    </header>
    <text-content>
      <h2 class="attention-voice">Dapp Name</h2>
      <p class="whisper-voice">This will be a short description</p>
    </text-content>
    <footer>
      <ul class="category-list">
        <li class="solid-voice">DeFi</li>
        <li class="solid-voice">NFT</li>
        <li class="solid-voice">Blockchain</li>
      </ul>
      <ul class="product-list">
        <li class="solid-voice">Data Feeds</li>
        <li class="solid-voice">VRF</li>
        <li class="solid-voice">Node</li>
      </ul>
      <NuxtLink to="/ecosystem/1" class="button">View Dapp</NuxtLink>
    </footer>
  </dapp-card>
</template>

<style scoped>
dapp-card {
  border: 2px solid var(--color);
  padding: 0.5rem;
  display: grid;
  grid-template-rows: 0.5fr 1fr 0.5fr;
  gap: 1rem;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header picture {
  width: 50px;

  /* border-radius: 50%; */
}

footer {
  display: grid;
  gap: 0.5rem;
}

footer ul {
  display: flex;
  gap: 0.5rem;
}
</style>
