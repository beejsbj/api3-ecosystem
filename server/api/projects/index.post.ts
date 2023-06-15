import { Project } from "~/server/models/Project";

export default defineEventHandler(async (event) => {
  try {
    const {
      name,
      description,
      about,
      categories,
      productTypes,
      socials,
      chains,
      year,
      website,
      doc,
      dappUrl,
    } = await readBody(event);

    return { message: "development progress" };
  } catch (err: any) {
    event.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something went wrong.",
    };
  }
});
