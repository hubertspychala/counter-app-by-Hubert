import React from "react";
import "./ButtonsPanel.css";

function ButtonsPanel(props) {
  return (
    <div className="buttons-panel">
      <button
        onClick={() => {
          props.buttonMethod("add");
        }}
      >
        Add1
      </button>
      <button
        onClick={() => {
          props.buttonMethod("reinit");
        }}
      >
        ReInit
      </button>
      <button
        onClick={() => {
          props.buttonMethod("reset");
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          props.buttonMethod("addx");
        }}
      >
        Zwiększ o {props.incStep}
      </button>
    </div>
  );
}

export default ButtonsPanel;
