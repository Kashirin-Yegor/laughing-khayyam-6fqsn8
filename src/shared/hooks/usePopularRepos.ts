import { useQuery } from "react-query";
import { fetchPopularRepos } from "api/github";

export const usePopularRepos = () => {
  return useQuery("popularRepos", fetchPopularRepos);
};
