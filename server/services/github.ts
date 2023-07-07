import { Octokit } from "@octokit/rest";

interface PrStatus {
  success: boolean;
  message: string;
}

const config = useRuntimeConfig();
const octokit = new Octokit({
  auth: config.GIT_ACCESS_TOKEN,
});

const owner = "AamirAlam";
const repo = "dapp-registry";

export async function createPR(
  projectData: any,
  projectId: string
): Promise<PrStatus> {
  const title = projectData.name?.split(" ")?.join("-");
  const branch = `${title}-${projectId}`;
  const base = "main";
  const path = `projects/${branch}.json`;

  let branchCreated = false;
  try {
    // get the SHA of the latest commit on the base branch
    const { data: refData } = await octokit.git.getRef({
      owner,
      repo,
      ref: `heads/${base}`,
    });

    const baseSha = refData.object.sha;

    // create new branch from the SHA
    const { data: newBranch } = await octokit.git.createRef({
      owner,
      repo,
      ref: `refs/heads/${branch}`,
      sha: baseSha,
    });

    branchCreated = true;

    const jsonContent = projectData;

    // convert content back to base64
    const newContent = Buffer.from(
      JSON.stringify(jsonContent, null, 2)
    ).toString("base64");

    // create blob for new file content
    const { data: newBlob } = await octokit.git.createBlob({
      owner,
      repo,
      content: newContent,
      encoding: "base64",
    });

    // create new tree
    const { data: newTree } = await octokit.git.createTree({
      owner,
      repo,
      base_tree: baseSha,
      tree: [
        {
          path: path,
          mode: "100644",
          type: "blob",
          sha: newBlob.sha,
        },
      ],
    });

    // create new commit
    const { data: newCommit } = await octokit.git.createCommit({
      owner,
      repo,
      message: `Add new project listing`,
      tree: newTree.sha,
      parents: [baseSha],
    });

    // update reference to new commit
    await octokit.git.updateRef({
      owner,
      repo,
      ref: `heads/${branch}`,
      sha: newCommit.sha,
    });

    // create the PR
    const { data: prData } = await octokit.pulls.create({
      owner,
      repo,
      title,
      head: branch,
      base,
    });
    return { success: true, message: "Pull request created for review" };
  } catch (err) {
    // delete created branch if something went wrong

    console.error("Something went wrong during pr creation: ", err);

    // delete the branch if it was created and an error occurred
    if (branchCreated) {
      try {
        await octokit.git.deleteRef({
          owner,
          repo,
          ref: `heads/${branch}`,
        });
      } catch (deleteErr) {
        console.error("Failed to delete branch:", deleteErr);
      }
    }

    return { success: false, message: "Failed to create pull request" };
  }
}
