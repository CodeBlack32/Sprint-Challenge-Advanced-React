import React from "react";

const Women = ({ name, country, searches }) => {
  return (
    <div className="card">
      <ul>
        <li>
          <h3>Name:</h3> {name}
        </li>
        <li>
          <h3>Country:</h3> {country}
        </li>
        <li>
          <h3>Searches:</h3> {searches}
        </li>
      </ul>
    </div>
  );
};

export default Women;
