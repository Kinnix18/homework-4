import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <h1>
      <strong>{props.Temperature}</strong>
      <span className="units">°C/°F</span>
    </h1>
  );
}
