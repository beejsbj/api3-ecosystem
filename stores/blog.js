import { defineStore } from "pinia";
import data from "./articles-data.json";
import slug from "slug";

export const useBlogStore = defineStore("blog", () => {
  const route = useRoute();

  //get articles, with dynamic pagination
  const baseServerUrl = ref("/api/articles/");
  const serverPage = ref(1);
  const serverURL = computed(() => {
    return serverPage.value
      ? baseServerUrl.value + `?page=${serverPage.value}`
      : baseServerUrl.value;
  });

  const { data: list, error: listError, refresh } = useFetch(serverURL.value);

  watch(serverPage, () => {
    console.log("serverPage changed", serverPage.value);
    console.log("serverURL changed", serverURL.value);
    console.log("list changed", list.value);
    refresh(); //#todo, this isnt working
  });

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
    serverPage,
  };
});
