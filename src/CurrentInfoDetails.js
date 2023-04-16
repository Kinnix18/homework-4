import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
export default function CurrentInfoDetails(props) {
  return (
    <>
      <div className="row">
        <ul className="col-9">
          <li>
            {props.data.city}, {props.data.country}
          </li>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li> Wind: {props.data.wind} km/h</li>
          <li>{props.data.description}</li>
        </ul>
        <div className="col-3">
          <img src={props.data.icon} alt={props.data.description} />
        </div>
      </div>
      <Temperature celsius={props.data.temperature} />
    </>
  );
}
