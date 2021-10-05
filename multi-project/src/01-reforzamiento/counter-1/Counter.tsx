import React, { useState, useRef } from "react";
import Input from "./Input";
import classes from './Counter.module.css';

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSkip = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    const skip = inputRef.current?.value || 0;
    const substractor = evt.currentTarget.textContent === '+' ? skip : -skip;
    setCount(prevCount => prevCount + +substractor);
  };

  console.log('[Counter] rendered!');

  return (
    <>
      <h1 className={classes.title}>Counter</h1>
      <p className={classes.result}>
        Result: <span>{count}</span>
      </p>
      <form className={classes.form}>
        <div className={classes.input}>
          <Input ref={inputRef} defValue={0} type="number" id="counter-skip" label="Skip value" />
        </div>
        <div className={classes.buttons}>
          <button onClick={handleSkip}>-</button>
          <button onClick={handleSkip}>+</button>
        </div>
      </form>
    </>
  );
}
