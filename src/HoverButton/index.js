import React from "react";
import HOC from "../HOC";
const HoverButton = (props) => {
  const { num, increament } = props;
  return (
    <div>
      <button onMouseOver={increament}>hover{num}me</button>
    </div>
  );
};

export default HOC(HoverButton, 5);
