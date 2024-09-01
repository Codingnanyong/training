import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default function App3({ status }) {
  return (
    <div>
      <h1>We're {status === "Open" ? "Open!" : "Closed!"}</h1>
    </div>
  );
}

App3.propTypes = {
  status: PropTypes.oneOf(["Open", "Closed"]),
};

ReactDOM.render(<App3 status="Open" />, document.getElementById("root"));
