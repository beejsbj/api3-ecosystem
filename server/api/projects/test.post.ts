import { Project } from "~/server/models/Project";
import { imageUploadHandler } from "../../utils/imageUpload";
import { authenticated } from "../../utils/authenticated";
import { checkBuildStatus } from "../../services/build";
import { createPR } from "~/server/services/github";
import { ProjectType } from "~/server/types";

export default defineEventHandler(async (event: any) => {
  try {
    const testProject: ProjectType = {
      name: "sample",
      tagline: "sample tagline",
      description: "sample description",
      status: "inactive",
      chains: ["1", "137"],
      categories: ["defi"],
      productType: "datafeed",
      proxies: {
        "1": [
          {
            proxyType: "dapi",
            feedName: "ETH/USD",
            dapiName: "ETH/USD",
            proxyAddress: "0x",
            oev: {
              enabled: false,
            },
          },
          {
            proxyType: "datafeedId",
            feedName: "ETH/USD",
            datafeedId: "0x",
            proxyAddress: "0x",
            oev: {
              enabled: false,
            },
          },
          {
            proxyType: "dapi",
            feedName: "ETH/USD",
            dapiName: "ETH/USD",
            proxyAddress: "0x",
            oev: {
              enabled: true,
              beneficiary: "0x",
            },
          },
          {
            proxyType: "datafeedId",
            feedName: "ETH/USD",
            datafeedId: "0x",
            proxyAddress: "0x",
            oev: {
              enabled: true,
              beneficiary: "0x",
            },
          },
        ],
        "137": [
          {
            proxyType: "dapi",
            feedName: "BTC/USD",
            dapiName: "BTC/USD",
            proxyAddress: "0x",
            oev: {
              enabled: true,
              beneficiary: "0x",
            },
          },
          {
            proxyType: "datafeedId",
            feedName: "BTC/USD",
            datafeedId: "0x",
            proxyAddress: "0x",
            oev: {
              enabled: true,
              beneficiary: "0x",
            },
          },
        ],
      },
      year: 2020,
      images: {
        logo: "https://-.com/images/logo.png",
        cover: "https://-.com/images/cover.png",
        banner: "https://-.com/images/banner.png",
        screenshots: [
          "https://-.com/images/screenshot1.png",
          "https://-.com/images/screenshot2.png",
          "https://-.com/images/screenshot3.png",
        ],
      },
      links: {
        dapp: "https://app.-.com/",
        website: "https://-.com/",
        docs: "https://docs.-.com/",
        explorer: "https://etherscan.io/",
        socials: [
          { label: "Reddit", url: "https://www.reddit.com/r/-/" },
          { label: "Twitter", url: "https://twitter.com/-" },
          { label: "Telegram", url: "https://t.me/-" },
          {
            label: "Youtube",
            url: "https://www.youtube.com/channel/",
          },
          { label: "Discord", url: "https://discord.gg/" },
        ],
      },
    };

    const projectId = "123";

    // // verify build with new project
    const buildResult = await checkBuildStatus(testProject, projectId);

    console.log("build result ", buildResult);

    // console.log("build result ", buildResult);

    // if (buildResult.status === "failure") {
    //   event.res.statusCode = 400;
    //   return {
    //     code: "BUILD_FAILED",
    //     message: "Failed to build project!",
    //   };
    // }
    // // create a pr for listing review if build success

    // const prResult = await createPR(payload, createdProject.id);

    // console.log("pr result ", prResult);

    // if (prResult.status === "failure") {
    //   event.res.statusCode = 400;
    //   return {
    //     code: "PR_FAILED",
    //     message: "Failed to create PR!",
    //   };
    // }

    // if (!createdProject.id) {
    //   event.res.statusCode = 400;
    //   return {
    //     code: "CREATE_FAILED",
    //     message: "Failed to create project listing!",
    //   };
    // }

    // const project = await Project.findById(createdProject.id);

    return buildResult;
  } catch (err: any) {
    console.log("create project error ", err);
    event.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something went wrong.",
    };
  }
});
