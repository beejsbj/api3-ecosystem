<script setup>
import { useInterfaceStore } from "@/stores/interface";

const ui = useInterfaceStore();
</script>

<template>
  <SectionColumn>
    <hero-landing>
      <picture class="line-decoration decoration">
        <LineDecoration />
      </picture>
      <h1
        :class="`${!ui.isMobile ? 'loud-voice' : 'booming-voice'} page-title`"
      >
        Unleash the Potential of Web3 dApps
      </h1>

      <div class="intro-paragraph">
        <picture>
          <LogoWhite />
        </picture>
        <p class="notice-voice">
          Experience the transformative power of blockchain technology through
          revolutionary applications that are reshaping various industries.
          Uncover the forefront of innovation and witness the game-changing
          potential of blockchain in action.
        </p>
      </div>
      <HeroCards />
      <CoinDecoration v-if="!ui.isMobile && false" />
    </hero-landing>
  </SectionColumn>
</template>

<style scoped lang="scss">
hero-landing {
  display: grid;
  gap: 4rem;
  position: relative;
  border-top: 1px solid var(--color);

  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
    gap: 2rem;
    height: 100vh;
  }

  .line-decoration {
    position: absolute;
    top: -1rem;
    right: -1rem;
    z-index: -1;
    scale: 0.6;
    transform-origin: top right;

    opacity: 0.5;
  }

  .page-title {
    grid-column: 1 / -1;

    @media (min-width: 768px) {
      grid-column: 2 / -6;
    }
    grid-row: 1 / span 1;
    padding: 15px 0;
    align-self: center;
  }

  .intro-paragraph {
    grid-row: 2 / span 1;
    grid-column: 1 / -1;

    display: grid;
    gap: 0.5rem;
    align-content: start;

    @media (min-width: 768px) {
      grid-column: 2 / -7;
      grid-template-columns: 0.1fr 1fr;
      gap: 2rem;
    }

    picture {
      aspect-ratio: 1 / 1;
      max-width: 50px;
      @media (min-width: 768px) {
        max-width: 200px;
      }
    }

    .notice-voice {
      font-size: var(--step-0);
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;

    width: 1px;
    z-index: -2;
    background: var(--gradient-color);
    height: 25%;
    @media (min-width: 768px) {
      height: 50%;
    }
  }
}
</style>
