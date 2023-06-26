import shell from "shelljs";

interface BuildStatus {
  status: "success" | "failure";
  message: string;
}

const dappRegistryRepoUrl = "https://github.com/AamirAlam/dapp-registry.git";

async function runBuild(projectData: any, projectId: string): Promise<string> {
  // chenge dir to dapp-registry
  return new Promise((resolve, reject) => {
    if (shell.cd("..").code !== 0) {
      reject(new Error("No parent dir found!"));
      return;
    }

    if (shell.cd("dapp-registry").code !== 0) {
      // clone dapp registry repo of not found
      if (shell.exec(`git clone ${dappRegistryRepoUrl}`).code !== 0) {
        reject(new Error("Git clone failed"));
        return;
      }

      if (shell.cd("dapp-registry").code !== 0) {
        reject(new Error("No dapp-registry dir found!"));
        return;
      }
    }

    // pull latest changes
    if (shell.exec(`git pull`).code !== 0) {
      reject(new Error("Git pull failed"));
      return;
    }

    // Install dependencies
    if (shell.exec("yarn").code !== 0) {
      reject(new Error("NPM install failed"));
      return;
    }

    // add project to dapp registry
    // resolve build status with new project data

    // Add project data to repo
    const prTitle = projectData.name?.split(" ")?.join("-");
    const branch = `${prTitle}-${projectId}`;
    const path = `projects/${branch}.json`;

    if (
      shell.exec(`echo '${JSON.stringify(projectData, null, 2)}' > ${path}`)
        .code !== 0
    ) {
      reject(new Error("Failed to add project data to repo"));
      return;
    }

    // Run the build script
    if (shell.exec("yarn build").code !== 0) {
      // disard changes when build fails
      if (shell.exec(`git reset --hard && git clean -fd`).code !== 0) {
        reject(new Error("Git clean failed"));
        return;
      } else {
        console.log("Git clean success");
      }

      reject(new Error("Build failed"));
      return;
    }

    // clean repo after build success
    if (shell.exec(`git reset --hard && git clean -fd`).code !== 0) {
      reject(new Error("Git clean failed"));
      return;
    } else {
      console.log("Git clean success");
    }

    // commit changes

    resolve("Build verified and pull request created successfully");
  });
}

export async function checkBuildStatus(
  projectData: any,
  projectId: string
): Promise<BuildStatus> {
  try {
    const buildStatus = await runBuild(projectData, projectId);

    return { status: "success", message: buildStatus };
  } catch (error) {
    return {
      status: "failure",
      message: "Build failed",
    };
  }
}
