import React, { useState } from "react";
import axios from "axios";
import "./CurrentInfo.css";

import "bootstrap/dist/css/bootstrap.css";
import FormattedDate from "./FormattedDate";

export default function CurrentInfo(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      city: response.data.city,
      country: response.data.country,
      date: new Date(response.data.time * 1000),
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-night.png",
      temperature: response.data.temperature.current,
    });
  }

  if (weatherData.ready) {
    return (
      <>
        <div className="row">
          <ul className="col-9">
            <li>
              {weatherData.city}, {weatherData.country}
            </li>
            <li>
              <FormattedDate date={weatherData.date} />
            </li>
            <li> Wind: {weatherData.wind} km/h</li>
            <li>{weatherData.description}</li>
          </ul>
          <div className="col-3">
            <img src={weatherData.icon} alt=" " />
          </div>
        </div>
        <div className="temperature">
          <h1>
            {Math.round(weatherData.temperature)}
            <span className="units">°C/°F</span>
          </h1>
        </div>
      </>
    );
  } else {
    let apiKey = "ff4e01btd323751oc4afa5a4c3e73777";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}
