import React, { useState } from "react";

export default function InputForm(props) {
  // const [savings,setSavings]=useState();
  // const [yearly, setYearly]=useState();
  // const [interest, setInterest]=useState();
  // const [duration, setDuration]=useState();
  const initialState = {
    "current-savings": '',
    "yearly-contribution": '',
    "expected-return": '',
    duration: '',
  };
  const [userInput, setUserInput] = useState(initialState);

  const submit = (event) => {
    event.preventDefault();
    props.calculateHandler(userInput);
    console.log(userInput)
  };

  const changeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };
  const reset = () => {
    setUserInput(initialState);
  };

  return (
    <div>
      <form className="form" onSubmit={submit}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              value={userInput["current-savings"]}
              onChange={(e) => {
                changeHandler("current-savings", e.target.value);
              }}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              value={userInput["yearly-contribution"]}
              onChange={(e) => {
                changeHandler("yearly-contribution", e.target.value);
              }}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              value={userInput["expected-return"]}
              onChange={(e) => {
                changeHandler("expected-return", e.target.value);
              }}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              value={userInput["duration"]}
              onChange={(e) => {
                changeHandler("duration", e.target.value);
              }}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={() => {reset()}}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}
