import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

//const loadStatus = () => "success - ready";

// default error screen 확인
// const loadStatus = () => {
//   throw new Error("something went wrong");
// };

// promise throw
const loadStatus = () => {
  //throw new Promise((resolves) => null);
  console.log("load status");
  throw new Promise((resolves) => setTimeout(resolves, 3000));
};

function Status() {
  const status = loadStatus();
  return <h1>status: {status}</h1>;
}

export default function App() {
  return (
    // <ErrorBoundary>
    //   <Status />
    // </ErrorBoundary>
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
