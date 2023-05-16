<script setup>
const props = defineProps(["dappLinks"]);

function copyLink(event) {
  navigator.clipboard.writeText(props.dappLinks.website);
  console.log("copied");
}
</script>

<template>
  <share-box>
    <header>
      <h4 class="solid-voice">Share</h4>
      <!-- #todo button not working -->
      <button class="icon close" @click="$emit('toggle')">╳</button>
    </header>
    <ul class="social-list">
      <!-- #todo make it so social links lead to share instead of link directly -->
      <li v-for="social in dappLinks.socials" :key="social.label">
        <a :href="social.url" :target="social.label">
          <SocialIcon :social="social.label" fill="var(--paper)" />
        </a>
      </li>
    </ul>
    <div>
      <a class="coay-text" target="website" :href="dappLinks.website">{{
        dappLinks.website
      }}</a>
      <button @click="copyLink" class="button filled">Copy</button>
    </div>
  </share-box>
</template>

<style lang="scss" scoped>
share-box {
  padding: 2rem;
  border-radius: var(--corners);
  background: var(--gradient-color);

  box-shadow: var(--shadow);
  display: grid;
  gap: 1rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--gray);
    padding: 1rem 0;
  }

  .social-list {
    display: flex;
    gap: 2rem;
    justify-content: space-around;
    align-items: center;

    padding: 1rem 0;
    border-bottom: 1px solid var(--gray);
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: var(--gradient-color);
    background: var(--gradient-dark);

    border-radius: var(--corners);
  }
}
</style>
