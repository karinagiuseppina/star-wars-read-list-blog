import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";

import ElementMoreDetails from "./ElementMoreDetails.jsx";

const PlanetMoreDetails = ({ planet }) => {
	if (planet === null) {
		return <div className="container" />;
	}

	let properties = [
		{ label: "Diameter", value: planet.properties.diameter },
		{ label: "Rotation Period", value: planet.properties.rotation_period },
		{ label: "Population", value: planet.properties.population },
		{ label: "Climate", value: planet.properties.climate },
		{ label: "Terrain", value: planet.properties.terrain },
		{ label: "Orbital Period", value: planet.properties.orbital_period }
	];

	return (
		<ElementMoreDetails name={planet.properties.name} description={planet.description} properties={properties} />
	);
};

export default PlanetMoreDetails;

PlanetMoreDetails.propTypes = {
	planet: PropTypes.object
};
