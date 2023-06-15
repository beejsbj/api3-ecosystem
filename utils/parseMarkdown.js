// ~/utils/parseMarkdown.js
import markdownParser from "@nuxt/content/transformers/markdown";

// first arg to parse() is for id, which is unused
export const parseMarkdown = (articleData) =>
  markdownParser.parse(articleData._id, articleData.content);
