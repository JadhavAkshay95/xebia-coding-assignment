import React from "react";

const PlanetCard = ({ planet, fontSize }) => {
  return (
    <div className="planet-card">
      <p style={{ fontSize: fontSize, fontWeight: 500 }}>
        {" "}
        Planet Name - {planet.name}
      </p>
      <hr />
      <div className="details">
        <p>
          <span className="card-details">
            Rotation Period - {planet.rotation_period}
          </span>
          <span>Orbital Period - {planet.orbital_period}</span>
        </p>
      </div>
      <p className="details">Population - {planet.population}</p>
    </div>
  );
};

export default PlanetCard;
