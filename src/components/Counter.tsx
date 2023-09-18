import { useState } from "react";
import styles from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>{count}</div>
      <div>
        <button className={styles.btn} onClick={increment}>
          +
        </button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};
