import mongoose from "mongoose";
import { Project } from "~/server/models/Project";

export default defineEventHandler(async (event) => {
  const projectId = event.context?.params?.id;

  try {
    if (!mongoose.isValidObjectId(projectId)) {
      event.res.statusCode = 400;
      return {
        code: "INVALID_ID",
        message: "Invalid project Id",
      };
    }
    const project = await Project.findById(projectId);

    if (!project) {
      event.res.statusCode = 404;
      return {
        code: "PROJECT_NOT_FOUND",
        message: `Project not found `,
      };
    }

    return project;
  } catch (err) {
    console.dir(err);
    event.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something went wrong.",
    };
  }
});
