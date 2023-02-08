import React, { useState } from "react";

const HOC = (WrappedComponent, num) => {
  const ChildHOC = () => {
    const [count, setCount] = useState(0);
    const increament = () => {
      setCount((prev) => prev + num);
    };

    return (
      <div>
        <WrappedComponent num={count} increament={increament} />
      </div>
    );
  };
  return ChildHOC;
};
export default HOC;
