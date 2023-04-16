import React, { useState } from "react";
import "./styles.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="temperature">
        <h1>
          {Math.round(props.celsius)}
          <span className="units">
            °C/{" "}
            <a href="/" onClick={convertToFahrenheit}>
              °F
            </a>
          </span>
        </h1>
      </div>
    );
  } else {
    let fahrenheit = props.celsius * 1.8 + 32;
    return (
      <div className="temperature">
        <h1>
          {Math.round(fahrenheit)}
          <span className="units">
            <a href="/" onClick={convertToCelsius}>
              °C
            </a>
            / °F
          </span>
        </h1>
      </div>
    );
  }
}
