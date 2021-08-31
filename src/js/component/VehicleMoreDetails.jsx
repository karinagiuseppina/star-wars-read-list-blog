import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";

import ElementMoreDetails from "./ElementMoreDetails.jsx";

const VehicleMoreDetails = ({ vehicle }) => {
	if (vehicle === null) {
		return <div className="container" />;
	}
	let properties = [
		{ label: "Manufacturer", value: vehicle.properties.manufacturer },
		{ label: "Cargo_capacity", value: vehicle.properties.cargo_capacity },
		{ label: "Model", value: vehicle.properties.model },
		{ label: "Passengers", value: vehicle.properties.passengers },
		{ label: "Crew", value: vehicle.properties.crew },
		{ label: "Length", value: vehicle.properties.length }
	];

	return (
		<ElementMoreDetails name={vehicle.properties.name} description={vehicle.description} properties={properties} />
	);
};

export default VehicleMoreDetails;

VehicleMoreDetails.propTypes = {
	vehicle: PropTypes.object
};
