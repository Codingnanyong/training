import { useFetch } from "./custom_fetch";

function Fetch({
  uri,
  renderSuccess,
  loadingFallback = <p>loading...</p>,
  rednerError = (error) => <pre>{JSON.stringify(error, null, 2)}</pre>,
}) {
  const { loading, data, error } = useFetch(uri);
  if (loading) return loadingFallback;
  if (error) return rednerError(error);
  if (data) return renderSuccess({ data });
}

export default function GitHubUser5({ login }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      loadingFallback={<LoadingSpinner />}
      rednerError={(error) => {
        return <p>Somting went wrong...</p>;
      }}
      //renderSuccess={UserDetail}
      renderSuccess={({ data }) => (
        <>
          <h1>Todo : Render UI for data</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      )}
    />
  );
}

function UserDetail({ data }) {
  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
}

function LoadingSpinner() {
  return <></>;
}
