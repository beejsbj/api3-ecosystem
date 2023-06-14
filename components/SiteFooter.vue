<script setup>
const socials = ref([
  {
    name: "Twitter",
    link: "https://twitter.com/api3dao",
    icon: "Twitter",
  },
  {
    name: "Discord",
    link: "https://discord.gg/8uWxnRF",
    icon: "Discord",
  },
  {
    name: "Reddit",
    link: "https://www.reddit.com/r/API3/",
    icon: "Reddit",
  },
  {
    name: "Telegram",
    link: "https://t.me/API3DAO",
    icon: "Telegram",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/api3",
    icon: "Linkedin",
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/channel/UCS8FZlXJWq_9m7Z9jV8e-kA",
    icon: "YouTube",
  },
  {
    name: "Github",
    link: "",
    icon: "Github",
  },
]);

const footerLinks = [
  {
    title: "For Developers",
    links: [
      { label: "Contact", path: "/contact" },
      { label: "Contact", path: "/contact" },
      { label: "Contact", path: "/contact" },
      // Add more links here
    ],
  },
  {
    title: "For data providers",
    links: [
      { label: "Contact", path: "/contact" },
      { label: "Contact", path: "/contact" },
      { label: "Contact", path: "/contact" },
      { label: "Contact", path: "/contact" },
      { label: "Contact", path: "/contact" },
      // Add more links here
    ],
  },
  {
    title: "DAO",
    links: [
      { label: "Contact", path: "/contact" },
      { label: "Contact", path: "/contact" },
      // Add more links here
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Contact", path: "/contact" },
      { label: "Contact", path: "/contact" },
      { label: "Contact", path: "/contact" },

      // Add more links here
    ],
  },
  {
    title: "Participate",
    links: [
      { label: "Contact", path: "/contact" },
      { label: "Contact", path: "/contact" },
      { label: "Contact", path: "/contact" },
      { label: "Contact", path: "/contact" },
      { label: "Contact", path: "/contact" },

      // Add more links here
    ],
  },
];

//#todo do the same for the other links
</script>

<template>
  <footer>
    <section class="footer-navigation">
      <inner-column>
        <picture class="site-logo">
          <LogoText />
        </picture>
        <section
          v-for="(footerMenu, index) in footerLinks"
          :key="index"
          class="footer-menu"
        >
          <h5 class="notice-voice">{{ footerMenu.title }}</h5>
          <nav>
            <NuxtLink
              v-for="(link, linkIndex) in footerMenu.links"
              :key="linkIndex"
              :to="link.path"
              class="calm-voice text"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>
        </section>
      </inner-column>
    </section>

    <section class="other">
      <inner-column>
        <nav class="misc-links">
          <NuxtLink to="/todo" class="calm-voice text">
            Privacy & Terms
          </NuxtLink>
          <!-- #todo -->
          <NuxtLink to="/todo" class="calm-voice text">
            Privacy & Terms
          </NuxtLink>
          <!-- #todo -->
          <NuxtLink to="/todo" class="calm-voice text">
            Privacy & Terms
          </NuxtLink>
          <!-- #todo -->
        </nav>
        <nav class="social-icons">
          <NuxtLink
            v-for="social in socials"
            :key="social.name"
            :to="social.link"
            class="calm-voice social-icon"
          >
            <SocialIcon :social="social.icon" />
          </NuxtLink>
        </nav>
        <p class="calm-voice">© 2023 API3 Foundation</p>
      </inner-column>
    </section>
  </footer>
</template>

<style scoped lang="scss">
footer {
  padding: 4rem 0;
  inner-column {
    padding-left: 30px;
    padding-right: 30px;
  }
}
a.calm-voice {
  font-size: var(--step-0);
  padding: 0.5rem 0;
  color: var(--ink);
}

.footer-navigation inner-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  justify-content: space-between;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
    align-items: start;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr;
  }

  .site-logo {
    width: 50px;
    grid-column: 1/ -1;

    @media (min-width: 768px) {
      width: 100px;
      grid-column: unset;
      grid-row: 1/ -1;
    }
  }

  h5 {
    font-size: var(--step-0);
    //  font-weight: 700;
    margin-bottom: 1rem;
    text-transform: uppercase;
    @media (min-width: 1024px) {
      font-size: var(--step--1);
    }
  }
}

section.other inner-column {
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 3rem;
  border-top: 1px solid var(--gray-dark);

  @media (min-width: 1024px) {
    grid-template-columns: 0.6fr 1fr 1fr;
    grid-template-rows: 1fr;
    justify-items: unset;
    justify-content: space-between;
    text-align: left;
    align-items: center;
  }

  .misc-links {
    display: grid;
    gap: 0.25rem;

    @media (min-width: 768px) {
      display: flex;
      gap: 2rem;
      justify-content: center;
    }
    @media (min-width: 1024px) {
      order: 2;
    }
  }
  .social-icons {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2rem;
    place-items: center;
    fill: var(--gray);
    @media (min-width: 1024px) {
      order: 3;
      justify-content: end;
      justify-self: end;
      gap: 3rem;
    }

    .social-icon {
      max-width: 25px;
    }
  }

  p {
    color: var(--gray);
    @media (min-width: 1024px) {
      order: 1;
    }
  }
}

main.index {
  footer {
    .footer-navigation inner-column {
      @media (min-width: 1024px) {
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 1fr;
        picture {
          grid-column: 1 / -1;
        }
      }
    }
    .other inner-column {
      grid-template-columns: unset;
      grid-template-rows: unset;
      text-align: center;
      justify-content: center;
      align-content: center;
    }
  }
}
</style>
