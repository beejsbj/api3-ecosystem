// ~/utils/parseMarkdown.js
import markdownParser from "@nuxt/content/transformers/markdown";
import { v4 as uuid } from "uuid";

// first arg to parse() is for id, which is unused
export const parseMarkdown = (articleData) =>
  markdownParser.parse(articleData._id ?? uuid(), articleData.content);
