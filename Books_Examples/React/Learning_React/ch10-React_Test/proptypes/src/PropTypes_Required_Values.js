import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default function App2({ name, using }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{using ? "used here" : "not used here"}</p>
    </div>
  );
}

App2.propTypes = {
  name: PropTypes.string.isRequired,
  using: PropTypes.bool,
};

ReactDOM.render(
  <App2 name="React" using={true} />,
  document.getElementById("root")
);
