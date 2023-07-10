<script setup>
import { gsap } from "gsap";

const content = ref({
  heading:
    "API3 DAO serves data on-chain with first-party oracles that provide a decentralized API layer for Web 3.0 applications.",
  paragraph:
    "Through our robust network of trusted first-party oracles, API3 serves verified data directly onto the blockchain, employing a secure, dependable, and foolproof solution that ensures end-to-end transparency throughout the entire process.",

  cards: [
    {
      title: "First-Party Oracle Services",
      description:
        "API3 provides secure first-party data feeds that establish seamless connections between API providers and oracle smart contracts, thereby eliminating the need for third-party intermediaries and bolstering the overall integrity of the data.",

      image: "square",
    },
    {
      title: "DAO Governed",
      description:
        "API3 prioritizes decentralization, a core value in the Web3 ecosystem. It's governance is based on a decentralized autonomous organization (DAO), empowers token holders in decision-making.",
      image: "triangle",
    },
    {
      title: "Developer Experience",
      description:
        "API3 is committed to an open-source, democratized web for all. We foster this through a comprehensive ecosystem, equipping developers to build exceptional applications.",
      image: "circle",
    },
  ],
});
const cardIndex = ref(false);

function animateBackground() {
  console.log("animate");

  gsap.fromTo(
    "mission-section .background-graphic path",
    {
      strokeDashoffset: "888",
      strokeDasharray: "888",
    },
    {
      duration: 3,
      strokeDashoffset: 0,
      ease: "power2.in",
      stagger: 0.05,
    }
  );
}

function animateParagraph() {
  gsap.fromTo(
    "mission-section .teaser-voice",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power4.out",
    }
  );
}

function onMouseEnter(index) {
  console.log("enter");
  cardIndex.value = index;
  const cards = document.querySelectorAll("mission-section .mission-card");

  cards.forEach((card, i) => {
    if (i !== index) {
      card.style.setProperty("--underline-width", 0);
    }
  });

  event.target.style.setProperty("--underline-width", "100%");

  animateParagraph();
}

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
  //     ".shape-graphic)",
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
    <mission-section v-auto-animate>
      <heading-text v-auto-animate>
        <h2 class="loud-voice">
          API3 DAO serves data on-chain with first-party oracles that provide a
          secure and reliable solution, with end-to-end transparency.
        </h2>
        <h3 class="teaser-voice">
          {{
            typeof cardIndex == "number"
              ? content.cards[cardIndex].description
              : content.paragraph
          }}
        </h3>
      </heading-text>
      <article>
        <text-content>
          <template v-for="(card, index) in content.cards">
            <div
              class="mission-card hover-underline"
              @mouseenter="onMouseEnter(index)"
            >
              <h4 class="notice-voice">{{ card.title }}</h4>
            </div>
          </template>
        </text-content>
        <!-- <picture class="graphic">
          <img src="@/assets/images/square.jpg" alt="" />
        </picture> -->
      </article>
      <picture class="shape-graphic">
        <img
          :src="`/images/${content.cards[cardIndex]?.image ?? 'square'}.svg`"
          alt=""
        />
      </picture>
      <picture class="background-graphic">
        <Transition @enter="animateBackground">
          <DatafeedIcon v-if="cardIndex == 0" />
          <DeveloperToolIcon v-else-if="cardIndex == 1" />
          <AirnodeIcon v-else-if="cardIndex == 2" />
        </Transition>
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
      @media (min-width: 768px) {
        grid-column: 2 / span 5;
      }
    }
  }

  picture.shape-graphic {
    //  max-width: 60vw;
    position: absolute;
    top: 50px;
    width: 320px;
    z-index: -1;
    opacity: 0.5;
  }

  picture.background-graphic {
    position: absolute;
    top: 10%;
    right: 0%;
    width: 80vmin;
    z-index: -1;
    opacity: 0.2;
    stroke-width: 0.1;
    //  transform: rotate(20deg);
  }

  .mission-card {
    border-radius: var(--corners);
    h4 {
      margin-bottom: 0.5rem;
    }
    transition: 0.2s;
  }
}

article {
  display: grid;
  //   grid-template-columns: 1fr 1fr;
  //   gap: 10rem;
  align-items: center;

  text-content {
    display: grid;
    gap: 2rem;

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
.mission-stats :is(h2, text-content, .shape-graphic) {
  /* opacity: 0; */
}
</style>
