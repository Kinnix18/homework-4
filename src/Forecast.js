import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="forecast">
      <div className="row">
        <div className="col-2">
          <div className="forecast-day">Thu</div>
          <div className="forecast-icon">
            <img src={props.data.icon} alt={props.data.description} />
          </div>
          <div className="forecast-temp">
            <span className="forecast-temp-max">12°</span>{" "}
            <span className="forecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
