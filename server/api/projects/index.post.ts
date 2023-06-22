import { Project } from "~/server/models/Project";
import { imageUploadHandler } from "../../utils/imageUpload";
import { authenticated } from "../../utils/authenticated";

export default authenticated(
  imageUploadHandler(
    defineEventHandler(async (event: any) => {
      try {
        const {
          name,
          tagline,
          categories,
          productTypes,
          description,
          chains,
          links,
          proxies,
          year,
        } = await (event.node?.req?.body || readBody(event));

        const uploadedImages = {
          logo: event.node.req?.files?.logo?.[0]?.location,
          banner: event.node.req?.files?.banner?.[0]?.location,
          cover: event.node.req?.files?.cover?.[0]?.location,
          screenshots: [
            event.node.req?.files?.screenshot1?.[0]?.location,
            event.node.req?.files?.screenshot2?.[0]?.location,
            event.node.req?.files?.screenshot3?.[0]?.location,
            event.node.req?.files?.screenshot4?.[0]?.location,
          ],
        };
        const payload = {
          name: "Test project live",
          tagline,
          description,
          images: uploadedImages,
          categories: JSON.parse(categories),
          productTypes: JSON.parse(productTypes),
          chains: JSON.parse(chains),
          proxies: JSON.parse(proxies),
          links: JSON.parse(links),
          year: year,
        };
        const createdProject = await new Project(payload).save();

        if (!createdProject.id) {
          event.res.statusCode = 400;
          return {
            code: "CREATE_FAILED",
            message: "Failed to create project listing!",
          };
        }

        const project = await Project.findById(createdProject.id);

        return project;
      } catch (err: any) {
        console.log("create project error ", err);
        event.res.statusCode = 500;
        return {
          code: "ERROR",
          message: "Something went wrong.",
        };
      }
    })
  )
);
