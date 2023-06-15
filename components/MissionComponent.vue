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
          <span class="highlight">API3</span> connects real-world data feeds to
          <span class="highlight">Web3</span>, providing developers with secure
          and reliable <span class="highlight">APIs</span> for building
          decentralized applications.
        </h2>
        <h3 class="teaser-voice">
          Our mission is to enable digital innovation by bridging the gap
          between smart contracts and the outside world, and to empower
          developers to create industry-leading websites, experiences, and apps.
        </h3>
      </heading-text>
      <article>
        <text-content>
          <div class="mission-card" @mouseenter="imageIndex = 0">
            <h4 class="notice-voice">Decentralization</h4>
            <p>
              API3 prioritizes decentralization, a core value in the Web3
              ecosystem. It establishes a trustless, open-source network of node
              operators delivering secure, reliable, and transparent data feeds
              to smart contracts. API3's governance model, based on a
              decentralized autonomous organization (DAO), empowers token
              holders in decision-making.
            </p>
          </div>
          <div class="mission-card" @mouseenter="imageIndex = 1">
            <h4 class="notice-voice">Innovation</h4>
            <p>
              API3 empowers developers with secure and reliable APIs and
              middleware, bridging the gap between smart contracts and the
              outside world. Its commitment to digital innovation drives the
              growth of the Web3 ecosystem. By providing decentralized APIs,
              API3 enhances the security, transparency, and accessibility of the
              Web.
            </p>
          </div>
          <div class="mission-card" @mouseenter="imageIndex = 2">
            <h4 class="notice-voice">Accessibility</h4>
            <p>
              API3 is dedicated to democratizing Web3, making it accessible to
              all. It achieves this through a user-friendly and comprehensive
              decentralized API ecosystem, empowering developers to create
              exceptional websites, experiences, and apps.
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
  height: 100%;
  position: relative;

  heading-text {
    margin-bottom: 2rem;

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
    position: absolute;
    top: 40px;
    right: 10vw;
    max-width: 50vw;
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
    background: var(--gradient-dark);
    padding: 1rem;
    border-radius: var(--corners);
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
<style>
.mission-stats,
.mission-stats :is(h2, text-content, .background-graphic) {
  /* opacity: 0; */
}
</style>
