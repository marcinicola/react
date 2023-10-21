import { useGitHubUser } from "./useGitHubUser";

export const GitHubUser = ({ username }) => {
  const { data, loading, error } = useGitHubUser(username);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div>
      <h1>{data?.login}</h1>
      <h2>{data?.name}</h2>
      <img src={data?.avatar_url} />
    </div>
  );
};
