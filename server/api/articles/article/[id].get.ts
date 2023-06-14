import mongoose from "mongoose";
import { Article } from "~/server/models/Article";

export default defineEventHandler(async (event) => {
  const articleId = event.context?.params?.id;

  try {
    if (!mongoose.isValidObjectId(articleId)) {
      event.res.statusCode = 400;
      return {
        code: "INVALID_ID",
        message: "Invalid project Id",
      };
    }
    const article = await Article.findById(articleId);

    if (!article) {
      event.res.statusCode = 404;
      return {
        code: "ARTICLE_NOT_FOUND",
        message: `Article not found `,
      };
    }

    return article;
  } catch (err) {
    console.dir(err);
    event.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something went wrong.",
    };
  }
});
