import { useState } from "react";

function DateCounterII() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);
  const today = new Date();
  today.setDate(today.getDate() + count);

  function handleReset() {
    setCount(0);
    setSteps(1);
  }

  return (
    <div className="date-counter">
      <div className="steps">
        <input
          value={steps}
          type="range"
          min={0}
          max={10}
          onChange={(e) => {
            console.log(e.target.value);
            setSteps(Number(e.target.value));
          }}
        />
        <span>Steps: {steps}</span>
      </div>
      <div className="count">
        <button onClick={() => setCount((count) => count - steps)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="count-input"
        />
        <button onClick={() => setCount((count) => count + steps)}>+</button>
      </div>
      <div className="date-message">
        <span>
          {" "}
          {count === 0
            ? "Today is "
            : count < 0
            ? `${Math.abs(count)} days ago from today was `
            : `${count} days from today is `}
          {today.toDateString()}
        </span>

        {count !== 0 || steps !== 1 ? (
          <button className="reset-button" onClick={handleReset}>
            Reset
          </button>
        ) : (
          " "
        )}
      </div>
    </div>
  );
}

export default DateCounterII;
