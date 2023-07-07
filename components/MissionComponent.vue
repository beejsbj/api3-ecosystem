<script setup>
import { gsap } from "gsap";

const images = ref(["square", "triangle", "circle"]);
const imageIndex = ref(0);

onMounted(() => {
  //   const pageLoad = gsap.timeline({
  //     // scrollTrigger: {
  //     //   trigger: ".mission-stats",
  //     // },
  //   });
  //   pageLoad.set(".mission-stats", {
  //     opacity: 1,
  //   });
  //   pageLoad.fromTo(
  //     ".background-graphic)",
  //     {
  //       y: 50,
  //       opacity: 0,
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: 0.5,
  //       ease: "power4.out",
  //       stagger: 0.25,
  //     }
  //   );
  //   pageLoad.fromTo(
  //     ".mission-stats :is(h2, text-content)",
  //     {
  //       y: 50,
  //       opacity: 0,
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: 0.5,
  //       ease: "power4.out",
  //       stagger: 0.25,
  //     }
  //   );
});
</script>

<template>
  <SectionColumn class="mission-stats">
    <mission-section>
      <heading-text>
        <h2 class="loud-voice">
          API3 DAO serves data on-chain with first-party oracles that provide a
          secure and reliable solution, with end-to-end transparency.
        </h2>
        <h3 class="teaser-voice">
          Through first-party oracles API3 DAO serves data on-chain using a
          secure and reliable solution, with end-to-end transparency.
        </h3>
      </heading-text>
      <article>
        <text-content>
          <div class="mission-card" @mouseenter="imageIndex = 0">
            <h4 class="notice-voice">First-Party Oracle Services</h4>
            <p>
              API3 provides first-party data feeds that link API providers
              directly to oracle smart contracts, eliminating third-party
              intermediaries and enhancing data integrity.
            </p>
          </div>
          <div class="mission-card" @mouseenter="imageIndex = 1">
            <h4 class="notice-voice">DAO Governed</h4>
            <p>
              API3 prioritizes decentralization, a core value in the Web3
              ecosystem. API3's governance model, based on a decentralized
              autonomous organization (DAO), empowers token holders in
              decision-making.
            </p>
          </div>
          <div class="mission-card" @mouseenter="imageIndex = 2">
            <h4 class="notice-voice">Developer Experience</h4>
            <p>
              API3 is dedicated an open-source, democratized web that is
              accessible to all. We support this vision through a user-friendly
              and comprehensive ecosystem, empowering developers with the
              resources they need to create exceptional applications.
            </p>
          </div>
        </text-content>
        <!-- <picture class="graphic">
          <img src="@/assets/images/square.jpg" alt="" />
        </picture> -->
      </article>
      <picture class="background-graphic">
        <img :src="`/images/${images[imageIndex]}.svg`" alt="" />
      </picture>
    </mission-section>
  </SectionColumn>
</template>

<style scoped lang="scss">
span.highlight {
  color: var(--highlight);
}
mission-section {
  display: grid;
  align-content: center;
  gap: 100px;
  height: 100%;
  position: relative;

  heading-text {
    h2 {
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);

    heading-text {
      grid-column: 2 / span 8;
    }
    article {
      grid-column: 1/-1;
    }
  }

  picture.background-graphic {
    //  max-width: 60vw;
    position: absolute;
    top: 50px;
    width: 320px;
    z-index: -1;
    opacity: 0.5;
  }
  text-content {
    display: grid;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  .mission-card {
    padding: 1rem;
    box-shadow: 0px 0px 2px 0px var(--color), 0px 0px 10px 0px var(--highlight);
    border-radius: var(--corners);
    h4 {
      margin-bottom: 1.5rem;
    }
    transition: 0.2s;
  }
  .mission-card:hover {
    box-shadow: 0px 0px 2px 0px var(--color), 0px 0px 30px 0px var(--highlight);
  }
}
article {
  display: grid;
  //   grid-template-columns: 1fr 1fr;
  //   gap: 10rem;
  align-items: center;

  text-content {
    display: grid;
    gap: 1rem;

    p {
      min-height: 100%;
    }
  }
}

h2.loud-voice {
  font-size: var(--step-2);
}
</style>
<style lang="scss">
.mission-stats {
}

.mission-stats,
.mission-stats :is(h2, text-content, .background-graphic) {
  /* opacity: 0; */
}
</style>
