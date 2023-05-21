<template>
  <SectionColumn>
    <hero-landing>
      <picture class="line-decoration decoration">
        <LineDecoration />
      </picture>
      <h1 class="booming-voice page-title">
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
    </hero-landing>
  </SectionColumn>
</template>

<style scoped lang="scss">
hero-landing {
  height: 90vh;
  border-top: 1px solid var(--color);

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;

  position: relative;

  .decoration {
    position: absolute;
    top: -1rem;
    right: -1rem;
    z-index: -1;
    scale: 0.6;
    transform-origin: top right;
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
    @media (min-width: 768px) {
      grid-column: 2 / -7;
    }

    display: grid;
    gap: 2rem;
    grid-template-columns: 0.1fr 1fr;
    align-content: start;

    picture {
      aspect-ratio: 1 / 1;
      max-width: 200px;
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
    height: 50%;
    width: 1px;
    z-index: -2;
    background: var(--gradient-color);
  }
}
</style>
