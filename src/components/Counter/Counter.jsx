import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    let newCount = Number(count);
    setCount(newCount + 1);
  }

  const decrement = () => {
    let newCount = Number(count);
    setCount(newCount - 1);
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <input type="text" value={count} onChange={e => setCount(e.target.value)}/>
      <button onClick={increment}>+</button>
    </div>
  )
};

export default Counter;