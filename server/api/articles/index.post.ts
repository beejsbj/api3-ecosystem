import { Article } from "~/server/models/Article";
import { authenticated } from "../../utils/authenticated";
import { ROLE } from "~/server/types";

export default authenticated(
  defineEventHandler(async (event: any) => {
    try {
      const articleData = await (event.node?.req?.body || readBody(event));

      console.log("req body ", {
        articleData,
      });
      // extract article metadata

      const arcitlePayload = {
        title: articleData.title,
        subtitle: articleData.subtitle,
        description: articleData.description,
        author: { name: articleData.author },
        content: articleData.body,
        category: articleData.category,
      };

      const article = await new Article(arcitlePayload).save();

      if (!article.id) {
        event.res.statusCode = 401;
        return {
          code: "ERROR",
          message: "Failed to save article in db.",
        };
      }

      event.res.statusCode = 201;
      return { code: "OK", message: "Project submitted successfully!" };
    } catch (err: any) {
      console.log("add article error ", err);
      event.res.statusCode = 500;
      return {
        code: "ERROR",
        message: "Failed to add, Invalid markdown file!",
      };
    }
  }),
  ROLE.MODERATOR
);
