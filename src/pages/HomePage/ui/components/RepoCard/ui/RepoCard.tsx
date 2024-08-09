import { FC } from "react";
import { RepoCardProps } from "entities/pages/HomePage";
import cls from "./RepoCard.module.scss";

export const RepoCard: FC<RepoCardProps> = (props) => {
  const {
    name,
    stars,
    url,
    avatarUrl,
    description,
    forksCount,
    language,
    openIssues,
    closedIssues,
    createdAt,
    updatedAt,
    index,
  } = props;
  const onClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className={cls.card} onClick={onClick}>
      <div>{index + 1}</div>
      <div>
        <img src={avatarUrl} alt={`${name} avatar`} className={cls.image} />
      </div>
      <div className={cls.details}>
        <h3 className={cls.title}>{name}</h3>
        <p className={cls.description}>{description}</p>
        <div className={cls.info}>
          <span className={cls.infoItem}>Stars: {stars}</span>
          <span className={cls.infoItem}>Forks: {forksCount}</span>
          <span className={cls.infoItem}>Language: {language}</span>
        </div>
        <div className={cls.info}>
          <span className={cls.infoItem}>Open Issues: {openIssues}</span>
          <span className={cls.infoItem}>Closed Issues: {closedIssues}</span>
        </div>
        <div className={cls.info}>
          <span className={cls.infoItem}>
            Created: {new Date(createdAt).toLocaleDateString()}
          </span>
          <span className={cls.infoItem}>
            Updated: {new Date(updatedAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};
