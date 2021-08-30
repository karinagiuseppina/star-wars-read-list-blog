import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";

import ElementProperty from "./ElementProperty.jsx";

const VehicleMoreDetails = ({ vehicle }) => {
	if (vehicle === null) {
		return <div className="container" />;
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-6 p-0">
					<img src="https://via.placeholder.com/500x300" alt="Card image cap" />
				</div>
				<div className="col-6 d-flex align-items-center justify-content-center flex-column text-light">
					<h1>{vehicle.properties.name}</h1>
					<p>{vehicle.description}</p>
				</div>
			</div>

			<div className="row text-center text-light p-2 mt-2 border-top border-secondary">
				<ElementProperty label="Manufacturer" value={vehicle.properties.manufacturer} />
				<ElementProperty label="Cargo_capacity" value={vehicle.properties.cargo_capacity} />
				<ElementProperty label="Model" value={vehicle.properties.model} />
				<ElementProperty label="Passengers" value={vehicle.properties.passengers} />
				<ElementProperty label="Crew" value={vehicle.properties.crew} />
				<ElementProperty label="Length" value={vehicle.properties.length} />
			</div>
		</div>
	);
};

export default VehicleMoreDetails;

VehicleMoreDetails.propTypes = {
	vehicle: PropTypes.object
};
