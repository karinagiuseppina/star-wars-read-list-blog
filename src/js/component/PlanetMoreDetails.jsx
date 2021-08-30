import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";

import ElementProperty from "./ElementProperty.jsx";

const PlanetMoreDetails = ({ planet }) => {
	if (planet === null) {
		return <div className="container" />;
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-6 p-0">
					<img src="https://via.placeholder.com/500x300" alt="Card image cap" />
				</div>
				<div className="col-6 d-flex align-items-center justify-content-center flex-column text-light">
					<h1>{planet.properties.name}</h1>
					<p>{planet.description}</p>
				</div>
			</div>

			<div className="row text-center text-light p-2 mt-2 border-top border-secondary">
				<ElementProperty label="Diameter" value={planet.properties.diameter} />
				<ElementProperty label="Rotation Period" value={planet.properties.rotation_period} />
				<ElementProperty label="Population" value={planet.properties.population} />
				<ElementProperty label="Climate" value={planet.properties.climate} />
				<ElementProperty label="Terrain" value={planet.properties.terrain} />
				<ElementProperty label="Orbital Period" value={planet.properties.orbital_period} />
			</div>
		</div>
	);
};

export default PlanetMoreDetails;

PlanetMoreDetails.propTypes = {
	planet: PropTypes.object
};
