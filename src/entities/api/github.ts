export interface IRepo {
  id: string;
  name: string;
  stargazers_count: number;
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
  forks_count: number;
  open_issues_count: number;
  closed_issues_count: number;
  language: string;
  owner: {
    avatar_url: string;
  };
}
