import React from "react";

export default function Form() {
  return (
    <form>
      <div className="row">
        <div className="col-8">
          <input
            type="search"
            className="form-control"
            id="city-input"
            placeholder="Type a city"
            autoFocus="on"
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
  );
}
