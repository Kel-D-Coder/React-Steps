import "./app.css";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [ isOpen, setIsOpen ] = useState(true)

  function handlePrevious() {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((prev) => prev + 1);
    }
  }

  function toggle() {
    setIsOpen(!isOpen)
  }

  return (
    <>

    <button className="close" onClick={toggle}>&times;</button>

      {isOpen && (
        <div className="steps" style={{ maxWidth: "100%" }}>
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
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
      )}
    </>
  );
}

export default App;
