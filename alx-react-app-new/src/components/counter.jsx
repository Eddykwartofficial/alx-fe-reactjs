import React, { useState } from "react";
import React from "react";

function Counter() {
  const Counter = useState(0);
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(setCount + 1)}>Increment</button>;
      <button onClick={() => setCount(setCount - 1)}>Decrement</button>;
      <button onClick={() => setCount(setCount(0))}>Reset</button>;
    </div>
  );
}
