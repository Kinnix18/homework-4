import React from "react";
import "./Forecast.css";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <>
      <div className="forecast-day">{day()}</div>
      <div className="forecast-icon">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.icon}
        />
      </div>
      <div className="forecast-temp">
        <span className="forecast-temp-max">
          {Math.round(props.data.temperature.maximum)}°
        </span>{" "}
        <span className="forecast-temp-min">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </>
  );
}
