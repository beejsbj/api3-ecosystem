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
      <p
        v-if="content.type === 'paragraph'"
        :id="content.text.slice(0, 17) + '...'"
      >
        {{ content.text }}
      </p>

      <ul v-else-if="content.type === 'list'">
        <li v-for="item in content.items" :key="item">
          {{ item }}
        </li>
      </ul>

      <FigureBlock
        v-else-if="content.type === 'image'"
        :image="content.url"
        :alt="content.alt"
        :caption="content.caption"
      />

      <BlockquoteBlock
        v-else-if="content.type === 'quote'"
        :quote="content.text"
        :source="content.source"
      />

      <CodeBlock
        v-else-if="content.type === 'code'"
        :code="content.text"
        :language="content.language"
      />
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

section:not(:has(h2)) > p {
  &:first-of-type::first-letter {
    /* styles for p elements within a section that's not the first child */
    initial-letter: 2;
    padding-right: 0.5rem;
    //   font-family: monospace;
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
