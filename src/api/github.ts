import axios from "axios";
import { IRepo } from "entities/api/github";
const GITHUB_API_URL = import.meta.env.APP_GITHUB_API_URL;

export const fetchPopularRepos = async () => {
  const response = await axios.get(
    `${GITHUB_API_URL}?q=language:typescript&sort=stars&order=desc`,
  );
  if (response.status !== 200) {
    throw new Error("Network response was not ok");
  }
  const repoList: IRepo[] = response.data.items;
  return repoList;
};
