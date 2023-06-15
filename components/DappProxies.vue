<script setup>
const props = defineProps(["dapp"]);
</script>

<template>
  <proxy-table>
    <h2 class="attention-voice">Proxies</h2>
    <ul>
      <li class="table-row">
        <div class="solid-voice chain">Chains</div>
        <div class="solid-voice type">Feed Name</div>
        <div class="solid-voice type">Type</div>
        <div class="solid-voice type">Address</div>
      </li>
      <li class="table-row" v-for="proxy in dapp.proxies">
        <div class="chain">
          {{ proxy.chainId }}
        </div>
        <div class="type">
          {{ proxy.feedName }}
        </div>

        <div class="type">
          {{ proxy.proxyType }}
        </div>
        <div class="type">
          {{ proxy.proxyAddress }}
        </div>
      </li>
    </ul>
  </proxy-table>
</template>

<style scoped lang="scss">
proxy-table {
  ul {
  }
  .table-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 1rem 0;

    & + .table-row {
      border-top: 1px solid var(--white);
    }
  }
}
</style>
