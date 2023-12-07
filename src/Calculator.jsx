import React, {useState} from "react";
import "./Calculator.css";

function Calculator() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [bmi, setBMI] = useState("")

  const handleCalculator = (event) => {
    // prevent page from being refreshed
    event.preventDefault();
    // define bmi
    const bmiResult = weight / (height * height)
    console.log(bmiResult);
    setBMI(bmiResult.toFixed(2))
  }

  return (
    <div className="Calculator">
      <form onSubmit={handleCalculator}>

        <label htmlFor="weight">Weight in kg: </label>
        <input
          type="text"
          id="weight"
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
        />

        <label htmlFor="height">Height in m: </label>
        <input
          type="text"
          id="height"
          value={height}
          onChange={(event) => setHeight(event.target.value)}
        />

        <input type="submit" />
      </form>

      {bmi && (
        <p>
          Your BMI is: <strong>{bmi}</strong>
        </p>
      )}
    </div>
  )
}

export default Calculator
