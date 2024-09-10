import { Octokit } from '@octokit/core'
import { Project } from 'md/project'

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_KEY
});

export default async function getRepos(): Promise<Project[]> {
  const array: Project[] = [];

  try {
    const { data: repositorios } = await octokit.request("GET /user/repos");

    repositorios.forEach(async (repo) => {

      const { data: archivos } = await octokit.request("GET /repos/{owner}/{repo}/contents", {
        owner: repo.owner.login,
        repo: repo.name,
        path: "addprofile.json",
      });

      if (archivos.some((archivo) => archivo.name === "addprofile.json")) {
        array.push({
          title: repo.name,
          description: repo.description,
          tegnologys: repo.language,
          url: repo.url,
          imgs: [],
          is_finish: true
        })
      }

    });

  } catch (error) {
    console.error("try catch:", error.message);
  }
    console.error("Variable entorno : ", process.env.NEXT_PUBLIC_GITHUB_KEY);
    console.error("array: ", array);

  return array;
}
