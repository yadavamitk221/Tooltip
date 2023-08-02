import "./app.css";
import { useState } from "react";
import Tooltip from "./Tooltip";

function App() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState("top");
  return (
    <div className="">
      <div className="btns">
        <button className="btnPosition" onClick={() => setPosition("top")}>
          top
        </button>
        <button className="btnPosition" onClick={() => setPosition("right")}>
          right
        </button>
        <button className="btnPosition" onClick={() => setPosition("down")}>
          bottom
        </button>
        <button className="btnPosition" onClick={() => setPosition("left")}>
          left
        </button>
      </div>
      <div className="mainBody">
        <div
          className="tool-container"
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          <p className="App"> Hover Over me</p>
          <div className="tooltipComponent">
            <Tooltip visible={visible} position={position} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
