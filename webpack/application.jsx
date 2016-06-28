import React from "react";
import ReactDOM from "react-dom";

const DateTime = require("react-datetime");
require("react-datetime/css/react-datetime.css");

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>This is React</h2>
        <DateTime />
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("app"));
});
