import { useState } from "react";

export default function TipCalc() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [fTip, setFTip] = useState(0);

  const totalTip = (bill * (tip + fTip)) / 2 / 100;

  function handleReset() {
    setBill("");
    setTip(0);
    setFTip(0);
  }

  return (
    <div className="tip">
      <div className="bill">
        <label>How much was the bill ? </label>
        <input
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          placeholder="Your bill"
        />
      </div>
      <InputField tip={tip} onSetTip={setTip}>
        How did you like the service ?
      </InputField>
      <InputField tip={fTip} onSetTip={setFTip}>
        How did your friend like the service ?
      </InputField>
      <h2>
        You pay ${bill + totalTip} (${bill} + ${totalTip}tip)
      </h2>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

function InputField({ tip, onSetTip, children }) {
  return (
    <div>
      <label>{children}</label>
      <select value={tip} onChange={(e) => onSetTip(Number(e.target.value))}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was OK (5%)</option>
        <option value={10}>It was Good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
