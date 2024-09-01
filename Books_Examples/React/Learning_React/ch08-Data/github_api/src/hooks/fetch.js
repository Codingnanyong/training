import React, { useFetch } from "react";

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
