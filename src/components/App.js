import React from "react";
import "../index.css";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <div className="App-left">
        I 'm a new Text block ready for your content.{" "}
      </div>{" "}
      <div className="App-right">
        <Navbar />
        <div className="box">
          <div className="container">
            <div className="container-1">
              <div className="container-2"> </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="container-a">
            <div className="container-a-1">
              <div className="container-2"> </div>{" "}
            </div>{" "}
            <div className="container-a-2">
              <div className="container-2"> </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="container-b">
            <div className="container-b-1">
              <div className="container-2"> </div>{" "}
            </div>{" "}
            <div className="container-b-2">
              <div className="container-2"> </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="container-c">
            <div className="container-c-1">
              <div className="container-2"> </div>{" "}
            </div>{" "}
            <div className="container-c-2">
              <div className="container-2"> </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
