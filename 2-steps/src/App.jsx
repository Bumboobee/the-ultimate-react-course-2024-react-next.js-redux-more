import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 💸"
];

const App = () => {
  const [step, setStep] = useState(1);

  const handlePrevious = () => {
    if (step > 1) 
      setStep((s) => s - 1)
  }

  const handleNext = () => {
    if (step < 3) 
      setStep((s) => s + 1)
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`step ${step >= 1 ? "active" : ""}`}>
          1<span className={`timeline ${step > 1 ? "active" : ""}`}></span>
        </div>
        <div className={`step ${step >= 2 ? "active" : ""}`}>
          2<span className={`timeline ${step > 2 ? "active" : ""}`}></span>
        </div>
        <div className={`step ${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">
        Step: {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App
