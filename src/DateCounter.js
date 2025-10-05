import { useState } from "react";

function DateCounter() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);
  const today = new Date();
  today.setDate(today.getDate() + count);

  return (
    <div className="date-counter">
      <div className="steps">
        <button onClick={() => setSteps((steps) => steps - 1)}>-</button>
        <span>Steps: {steps}</span>
        <button onClick={() => setSteps((steps) => steps + 1)}>+</button>
      </div>
      <div className="count">
        <button onClick={() => setCount((count) => count - steps)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((count) => count + steps)}>+</button>
      </div>
      <div class="date-message">
        {count === 0
          ? "Today is "
          : count < 0
          ? `${Math.abs(count)} days ago from today was `
          : `${count} days from today is `}
        <span>{today.toDateString()}</span>
      </div>
    </div>
  );
}

export default DateCounter;
