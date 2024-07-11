import { useState } from "react";
import React from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const countValue = () => {
    setTimeout(() => {
      console.log("clicked the button");
      setCount((currentState) => {
        return currentState + 1;
      });
    }, 3000);
    //console.log(count);
  };
  return (
    <>
      <h2>UseState Gotcha</h2>
      <h3>{count}</h3>
      <button type="button" className="btn" onClick={countValue}>
        count
      </button>
    </>
  );
};

export default UseStateGotcha;
