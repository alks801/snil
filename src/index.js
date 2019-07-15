import React from "react";
import ReactDOM from "react-dom";

import Row from "./row";
import Column from "./column";
import Button from "./button";

function App() {
  return (
    <div className="App">
      <Row align="middle" style={{ height: 100, border: "2px solid blue" }}>
        <Column
          justify="right"
          width={8}
          align="middle"
          style={{ height: "50%", border: "1px solid green" }}
        >
          Column1
        </Column>
        <Column
          align="bottom"
          style={{ height: "70%", border: "1px dashed red" }}
        >
          Column2
        </Column>
      </Row>
      <Row align="middle" style={{ height: 200, border: "1px solid black" }}>
        <Button text="Button" />
        <Button text="Button disabled" disabled={true} />
      </Row>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
