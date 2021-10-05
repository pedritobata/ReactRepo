import React, { useState } from "react";
import classes from "./Input.module.css";

interface Props {
  defValue: string | number;
  id: string;
  label: string;
  type: string;
}

const Input = React.forwardRef(
  (
    { defValue, id, label, type }: Props,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const [value, setValue] = useState(defValue);
    return (
      <>
        <label className={classes.label} htmlFor={id}>
          {label}
        </label>
        <input
          className={classes.input}
          ref={ref}
          id={id}
          type={type}
          value={value}
          onChange={(e) => setValue(+e.target.value < 0 ? 0 : e.target.value)}
        />
      </>
    );
  }
);

export default Input;
