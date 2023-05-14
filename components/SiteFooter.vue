<script setup>
const route = useRoute();
</script>

<template>
  <footer v-if="route.name != 'add-dapp'">
    <section class="footer-navigation">
      <inner-column>
        <picture class="site-logo">
          <LogoText />
        </picture>
        <section class="footer-menu">
          <h5 class="notice-voice">For Developers</h5>
          <nav>
            <NuxtLink to="/contact" class="calm-voice text"> Contact </NuxtLink>
            <NuxtLink to="/contact" class="calm-voice text"> Contact </NuxtLink>
            <NuxtLink to="/contact" class="calm-voice text"> Contact </NuxtLink>
          </nav>
        </section>
        <section class="footer-menu">
          <h5 class="notice-voice">For data providers</h5>
          <nav>
            <NuxtLink to="/contact" class="calm-voice text"> Contact </NuxtLink>
            <NuxtLink to="/contact" class="calm-voice text"> Contact </NuxtLink>
          </nav>
        </section>
        <section class="footer-menu">
          <h5 class="notice-voice">DAO</h5>
          <nav>
            <NuxtLink to="/contact" class="calm-voice text"> Contact </NuxtLink>
            <NuxtLink to="/contact" class="calm-voice text"> Contact </NuxtLink>
            <NuxtLink to="/contact" class="calm-voice text"> Contact </NuxtLink>
          </nav>
        </section>
        <section class="footer-menu">
          <h5 class="notice-voice">Resources</h5>
          <nav>
            <NuxtLink to="/contact" class="calm-voice text"> Contact </NuxtLink>
            <NuxtLink to="/contact" class="calm-voice text"> Contact </NuxtLink>
            <NuxtLink to="/contact" class="calm-voice text"> Contact </NuxtLink>
          </nav>
        </section>
        <section class="footer-menu">
          <h5 class="notice-voice">Participate</h5>
          <nav>
            <NuxtLink to="/contact" class="calm-voice text"> Contact </NuxtLink>
            <NuxtLink to="/contact" class="calm-voice text"> Contact </NuxtLink>
            <NuxtLink to="/contact" class="calm-voice text"> Contact </NuxtLink>
            <NuxtLink to="/contact" class="calm-voice text"> Contact </NuxtLink>
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
            class="icon"
            href="https://twitter.com/api3dao"
            target="twitter"
          >
            <TwitterIcon />
          </NuxtLink>
          <NuxtLink
            class="icon"
            href="https://discord.gg/8uWxnRF"
            target="discord"
          >
            <DiscordIcon />
          </NuxtLink>
          <NuxtLink class="icon" href="https://t.me/API3DAO" target="telegram">
            <TelegramIcon />
          </NuxtLink>
          <NuxtLink
            class="icon"
            href="
					https://www.reddit.com/r/API3/"
            target="reddit"
          >
            <RedditIcon />
          </NuxtLink>

          <NuxtLink class="icon" href="#" target="github">
            <GithubIcon />
          </NuxtLink>

          <NuxtLink
            class="icon"
            href="
					https://www.linkedin.com/company/api3/"
            target="linkedin"
          >
            <LinkedinIcon />
          </NuxtLink>
          <NuxtLink
            class="icon"
            href="
					https://www.youtube.com/channel/UCS8FZlXJWq_9mZf6LKlBZRg"
            target="youtube"
          >
            <YoutubeIcon />
          </NuxtLink>
        </nav>
        <p class="calm-voice">© 2023 API3 Foundation</p>
      </inner-column>
    </section>
  </footer>
  <Teleport to="body">
    <BlobAnimation />
    <BackgroundDecoration />
  </Teleport>
</template>

<style scoped lang="scss">
footer {
  padding: 4rem 0;
}
footer inner-column {
  padding-left: 30px;
  padding-right: 30px;
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

    p {
      order: 1;
    }

    .misc-links {
      order: 2;
    }
    .social-icons {
      order: 3;
      justify-content: end;
      justify-self: end;
    }
  }

  .misc-links {
    display: grid;
    gap: 0.25rem;

    @media (min-width: 768px) {
      display: flex;
      gap: 2rem;
      justify-content: center;
    }
  }
  .social-icons {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.5rem;
    place-items: center;
  }

  p {
    color: var(--gray);
  }
}
</style>
