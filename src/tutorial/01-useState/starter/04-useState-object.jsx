import { useState } from "react";
import React from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Sophia",
    age: 23,
    hobby: "eating and sleeping",
  });
  const displayDetails = () => {
    setPerson({ name: "Divine", age: 24, hobby: "read stories" });
  };
  return (
    <div>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>Enjoys: {person.hobby}</h2>
      <button type="button" className="btn" onClick={displayDetails}>
        show me
      </button>
    </div>
  );
};

export default UseStateObject;
