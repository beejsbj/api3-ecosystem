import { ProjectType } from "server/types";
import shelljs from "shelljs";

interface BuildStatus {
  success: boolean;
  message: string;
}
const DAPP_REPO_URL = "https://github.com/AamirAlam/dapp-registry.git";

async function verifyBuild(
  projectData: ProjectType,
  projectId: string
): Promise<BuildStatus> {
  // chenge dir to dapp-registry
  return new Promise((resolve, reject) => {
    const isProjectDirExists =
      shelljs.exec(`cd .. && cd dapp-registry`).code === 0;

    if (!isProjectDirExists) {
      const isGitInstalled = shelljs.exec(`git --version`).code === 0;

      if (!isGitInstalled) {
        reject({ success: false, message: "Git installation failed" });
        return;
      }

      const isCloned =
        shelljs.exec(`cd .. &&  git clone ${DAPP_REPO_URL}`).code === 0;

      if (!isCloned) {
        reject({ success: false, message: "Git clone failed" });
        return;
      }
    }
    // append new project and run build

    const isBuildChecked =
      shelljs.exec(`cd .. && cd dapp-registry && git pull && yarn`).code === 0;

    if (!isBuildChecked) {
      reject({ success: false, message: "Git pull failed" });
      return;
    }

    const prTitle = projectData.name?.split(" ")?.join("-");
    const branch = `${prTitle}-${projectId}`;
    const path = `projects/${branch}.json`;

    const isProjectAdded =
      shelljs.exec(
        `cd .. && cd dapp-registry && echo '${JSON.stringify(
          projectData,
          null,
          2
        )}' > ${path}`
      ).code === 0;

    if (!isProjectAdded) {
      reject({ success: false, message: "Failed to add project data to repo" });
      return;
    }

    const isBuildSuccess =
      shelljs.exec(`cd .. && cd dapp-registry && yarn build`).code === 0;

    // clean git repo after build check
    const isCleaned =
      shelljs.exec(
        `cd .. && cd dapp-registry && git reset --hard && git clean -fd`
      ).code === 0;

    console.log("Repo cleaned after test ", isCleaned);
    if (!isBuildSuccess) {
      reject({ success: false, message: "Build failed with new project" });
      return;
    }

    resolve({ success: true, message: "Build success with new project data" });
  });
}

export async function checkBuildStatus(
  projectData: ProjectType,
  projectId: string
): Promise<BuildStatus> {
  try {
    const buildStatus = await verifyBuild(projectData, projectId);

    console.log("buildStatus", buildStatus);
    return buildStatus;
  } catch (error: any) {
    console.log("build failed", error);
    return error;
  }
}
