import React, { useState } from "react";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast">
        <div className="row">
          <div className="col-2">
            <ForecastDay data={forecastData[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "ff4e01btd323751oc4afa5a4c3e73777";
    let apiURLForecast = `https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=${apiKey}&units=metric`;
    axios.get(apiURLForecast).then(handleResponse);
    return null;
  }
}
