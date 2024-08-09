import { FC } from "react";
import { usePopularRepos } from "shared/hooks/usePopularRepos";
import { RepoCard } from "pages/HomePage/ui/components/RepoCard/ui/RepoCard";
import cls from "./RepoList.module.scss";
import { CircularProgress } from "@mui/material";

const RepoList: FC = () => {
  const { data, isLoading, isError } = usePopularRepos();

  if (isLoading)
    return (
      <div className={cls.loader_container}>
        <CircularProgress />
      </div>
    );
  if (isError)
    return <div className={cls.loader_container}>Error fetching data</div>;
  return (
    <div className={cls.container}>
      {data?.map((repo, index) => (
        <RepoCard
          key={repo.id}
          index={index}
          name={repo.name}
          stars={repo.stargazers_count}
          url={repo.html_url}
          avatarUrl={repo.owner.avatar_url}
          description={repo.description || "No description available"}
          createdAt={repo.created_at}
          updatedAt={repo.updated_at}
          forksCount={repo.forks_count}
          language={repo.language || "N/A"}
          openIssues={repo.open_issues_count}
          closedIssues={repo.closed_issues_count || 0}
        />
      ))}
    </div>
  );
};

export default RepoList;
