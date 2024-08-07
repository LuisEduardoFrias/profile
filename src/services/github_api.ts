import { Octokit } from "@octokit/core";


const octokit = new Octokit({
  auth: process.env.GITHUB_KEY

});

export default async function getRepo() {
  const array = [];
  try {
    const { data: repositorios } = await octokit.request("GET /user/repos");

    repositorios.forEach(async (repo) => {
      const { data: archivos } = await octokit.request("GET /repos/{owner}/{repo}/contents", {
        owner: repo.owner.login,
        repo: repo.name,
        path: "addprofile.json",
      });

      const has_file = archivos.some((archivo) => archivo.name === "addprofile.json");
      console.info("info -- has file: " + has_file)
      if (has_file) {
        array.push({
          title: repo.name,
          description: repo.description,
          tegnologys: repo.language,
          url: repo.url,
          imgs: []
        })
        console.info("array: " + array)
      }
    });
  } catch (error) {
    console.error("try catch:", error.message);
  }

  return array;
}
