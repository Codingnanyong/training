import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

const loadStatus = function (pending) {
  let error, response;

  pending.then((r) => (response = r)).catch((e) => (error = e));

  //   const promise = new Promise((resolves) => setTimeout(resolves, 3000))
  //     .then(() => (response = "success"))
  //     .catch((e) => (error = e));
  //   return function () {
  //     if (error) throw error;
  //     if (response) return response;
  //     throw pending;
  //   };
  // })();
  return {
    read() {
      if (error) throw error;
      if (response) return response;
      throw pending;
    },
  };
};

const threeSecondsToGnar = new Promise((resolves) =>
  setTimeout(() => resolves({ gnar: "gnarly!" }), 3000)
);

const resource = createResource(threeSecondsToGnar);

function Gnar() {
  const result = resource.read();
  return <h1>Gnar : {result.gnar}</h1>;
}

function Status() {
  const status = loadStatus();
  return <h1>status: {status}</h1>;
}

export default function App() {
  return (
    <Suspense fallback={<GridLoader />}>
      <ErrorBoundary>
        <Status />
      </ErrorBoundary>
    </Suspense>
  );
}

function GridLoader() {
  return <></>;
}
