<script setup>
const props = defineProps(["section"]);

function highlightElement(element, addHighlight) {
  if (addHighlight) {
    element.classList.add("highlight");
  } else {
    element.classList.remove("highlight");
  }
}

function highlightFocus(event) {
  if (event.target.matches("section  :is(figure, p, code, blockquote)")) {
    highlightElement(event.target, true);

    event.target.addEventListener("mouseleave", () => {
      highlightElement(event.target, false);
    });
  }
  if (event.target.matches("section  li")) {
    const $parent = event.target.closest("ul");
    highlightElement($parent, true);

    event.target.addEventListener("mouseleave", () => {
      highlightElement($parent, false);
    });
  }
  if (event.target.matches("section  h2")) {
    const $parent = event.target.closest("section");
    highlightElement($parent, true);

    event.target.addEventListener("mouseleave", () => {
      highlightElement($parent, false);
    });
  }
}

onMounted(() => {
  window.addEventListener("mouseover", highlightFocus);

  return () => {
    window.removeEventListener("mouseover", highlightFocus);
  };
});
</script>

<template>
  <section
    :class="section.isHighlighted ? 'article-section' : 'article-section'"
  >
    <h2 class="attention-voice" v-if="section.heading" :id="section.heading">
      {{ section.heading }}
    </h2>
    <template v-for="content in section.content">
      <p v-if="content.type === 'paragraph'">
        {{ content.text }}
      </p>

      <ul v-else-if="content.type === 'list'">
        <li v-for="item in content.items" :key="item">
          {{ item }}
        </li>
      </ul>

      <figure v-else-if="content.type === 'image'">
        <img :src="content.url" :alt="content.alt" />
        <figcaption class="whisper-voice" v-if="content.caption">
          {{ content.caption }}
        </figcaption>
      </figure>

      <blockquote v-else-if="content.type === 'quote'">
        <p>
          {{ content.text }}
        </p>
        <figcaption>—{{ content.source }}</figcaption>
      </blockquote>
      <!-- #todo more refactoring -->

      <CodeBlock v-else-if="content.type === 'code'" :content="content" />
    </template>
  </section>
</template>

<style scoped lang="scss">
h2 {
  margin-bottom: 1.5rem;
}

ul {
  margin-top: 1rem;
  display: grid;
  gap: 0.5rem;

  li {
    position: relative;
    --space: 1.5rem;
    left: var(--space);
    &::before {
      content: "";
      width: 8px;
      height: 8px;

      position: absolute;
      left: calc(-1 * var(--space));
      top: 50%;
      transform: translateY(-50%);

      background: url("/assets/images/triangle.svg");
      background-size: cover;
      background-position: center;
    }
  }
}

p {
  margin-top: 1rem;
}

li,
p {
  letter-spacing: 0.02em;
  max-width: 70ch;
}

figure {
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 1rem;
  justify-items: start;

  position: relative;
  //   left: -10%;

  &::after {
    position: absolute;
    inset: 0;

    content: "";
    z-index: 1;
  }
}

section:not(:has(h2)) > p:first-of-type::first-letter {
  /* styles for p elements within a section that's not the first child */
  initial-letter: 2;
  padding-right: 0.5rem;
  //   font-family: monospace;
}

code {
  margin: 2rem 0;
  padding: 2rem;
  background: var(--gradient-dark);
  border-radius: var(--corners);
  display: block;
  max-width: 70ch;
  color: var(--ink);
  position: relative;

  span {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: var(--step--2);
    cursor: pointer;
  }
}

blockquote {
  margin: 2rem 0;

  padding: 4rem;
  background: var(--gradient-dark);
  display: block;
  max-width: 70ch;
  color: var(--ink);
  position: relative;
  border-radius: var(--corners);
  //   overflow: hidden;

  p {
    margin: 0;
    padding: 0;
    font-style: italic;
  }
  figcaption {
    margin-top: 1rem;
    color: var(--color);
    text-align: right;
    font-style: normal;
  }

  &::after {
    content: "“";
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 10rem;
    color: var(--highlight);
    z-index: 1;
    opacity: 0.5;
  }
  p::after {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -2;
    background: var(--gradient-color);
    border-radius: calc(var(--corners) + 3rem);
  }
}

//highlight focus

.article-section,
section > * {
  position: relative;
  --height: 0;

  &::before {
    content: "";
    height: var(--height);
    width: 2px;

    position: absolute;
    left: -2rem;
    top: 50%;
    transform: translateY(-50%);

    background: var(--gradient-color);
    border-radius: var(--corners);

    transition: 0.1s;
  }
}

.highlight {
  --height: 100%;
}
</style>
