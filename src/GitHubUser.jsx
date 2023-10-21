import { useGitHubUser } from "./useGitHubUser";

export const GitHubUser = ({username}) => {
  const { data } = useGitHubUser(username);
  return (
    <div>
      <h1>{data?.login}</h1>
      <h2>{data?.name}</h2>
      <img src={data?.avatar_url}/>
    </div>
  );
};
