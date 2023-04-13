import React, { useState } from "react";
import axios from "axios";
import "./CurrentInfo.css";
import "bootstrap/dist/css/bootstrap.css";

import CurrentInfoDetails from "./CurrentInfoDetails";

export default function CurrentInfo(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
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

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "ff4e01btd323751oc4afa5a4c3e73777";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                className="form-control"
                id="city-input"
                placeholder="Type a city"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-4">
              <input
                type="submit"
                className="btn btn-outline-primary"
                value="Search"
              />
            </div>
          </div>
        </form>
        <CurrentInfoDetails data={weatherData} />
      </>
    );
  } else {
    search();

    return "Loading...";
  }
}
