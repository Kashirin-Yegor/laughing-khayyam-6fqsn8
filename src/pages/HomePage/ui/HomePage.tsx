import RepoList from "./components/RepoList/ui/RepoList.tsx";
import cls from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <>
      <div className={cls.header}>
        <h1>Самые популярные (по звездам) TS проекты на Github</h1>
      </div>
      <RepoList />
    </>
  );
};
