import { defineStore } from "pinia";
import data from "./articles-data.json";
import slug from "slug";

export const useBlogStore = defineStore("blog", () => {
  const route = useRoute();

  const list = useLocalStorage("blog-data", data);

  const currentArticle = computed(() => {
    if (route.params.detail) {
      return list.value.find(
        (article) => slug(article.title) === route.params.detail
      );
    }
  });

  return {
    list,
    currentArticle,
  };
});
