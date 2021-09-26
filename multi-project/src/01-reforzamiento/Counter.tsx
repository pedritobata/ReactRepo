import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  const [skip, setSkip] = useState<number>(0);

  const handleSkip = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    const substractor = evt.currentTarget.textContent === '+' ? skip : -skip;
    setCount(prevCount => prevCount + substractor);
  };

  return (
    <>
      <h1>Counter</h1>
      <p>
        Result: <span>{count}</span>
      </p>
      <form>
        <div>
          <label htmlFor="counter-skip">Skip value</label>
          <input
            id="counter-skip"
            type="number"
            value={skip}
            onChange={(e) => setSkip(+e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleSkip}>-</button>
          <button onClick={handleSkip}>+</button>
        </div>
      </form>
    </>
  );
}
