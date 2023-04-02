import React from "react";
import City from "./City";
import Country from "./Country";
import Day from "./Day";
import Time from "./Time";
import Wind from "./Wind";
import WeatherDescription from "./WeatherDescription";
import Image from "./Image";
import "./CurrentInfo.css";

import "bootstrap/dist/css/bootstrap.css";

const CurrentInfo = () => {
  return (
    <div className="row">
      <div className="col-9">
        <ul className="p-0">
          <li>
            <City City="Kovel" />
            <Country Country="Ukraine" />
          </li>
          <li>
            <Day Day="Friday" />
            <Time Time="20:20" />
          </li>
          <li>
            Wind: <Wind Wind={4} />
          </li>
          <li>
            <WeatherDescription Description="Sunny" />
          </li>
        </ul>
      </div>
      <div className="col-3">
        <Image />
      </div>
    </div>
  );
};

export default CurrentInfo;
