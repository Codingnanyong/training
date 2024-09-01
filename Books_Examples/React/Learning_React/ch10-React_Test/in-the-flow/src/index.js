//@flow
import React from "react";
import ReactDOM from "react-dom";

type Props = {
  item: string,
  cost?: number,
};

function App(props: Props) {
  return (
    <div>
      <h1>{props.item}</h1>
      <p>Cost: {props.cost}</p>
    </div>
  );
}

const root = document.getElementById("root");

if (root != null) {
  ReactDOM.render(<App item="jacket" cost={249} />, root);
}
