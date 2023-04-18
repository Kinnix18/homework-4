import React from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "ff4e01btd323751oc4afa5a4c3e73777";
  let apiURLForecast = `https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=${apiKey}&units=metric`;
  axios.get(apiURLForecast).then(handleResponse);

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
