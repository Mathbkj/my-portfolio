import me from "@/assets/me-ghibi.png";
import githubBlog from "@/assets/github-blog.png";
import flipTheCoin from "@/assets/flip-the-coin.png";
import imageUpload from "@/assets/image-upload.png";

import { Octokit } from "octokit";
import type { RestEndpointMethodTypes } from "@octokit/plugin-rest-endpoint-methods";

export function getMeSource() {
  return me;
}

export function getProjectsPic() {
  return [githubBlog, flipTheCoin, imageUpload];
}

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN,
});

// Type for the authenticated user
export type GetAuthenticatedUser =
  RestEndpointMethodTypes["users"]["getAuthenticated"]["response"]["data"];

// Type for repository
export type Repository =
  RestEndpointMethodTypes["repos"]["get"]["response"]["data"];

export async function getUser(): Promise<GetAuthenticatedUser> {
  const { data } = await octokit.rest.users.getAuthenticated();
  return data;
}

export async function getGithubRepos(id: string): Promise<Repository> {
  const data = await getUser();
  const req = await octokit.request(`GET /repos/${data.login}/${id}`);
  return req.data satisfies Repository;
}
