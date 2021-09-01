import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";

import ElementCard from "./ElementCard.jsx";

const VehicleCard = ({ vehicle }) => {
	const route = `/vehicles/${vehicle.uid}`;
	const [vehicleData, setVehicleData] = useState(null);

	function getVehicleData() {
		fetch(vehicle.url)
			.then(res => res.json())
			.then(data => {
				setVehicleData(data.result);
			})
			.catch(err => console.error(err));
	}

	useEffect(() => {
		getVehicleData();
	}, []);

	let description =
		vehicleData !== null
			? `Model: ${vehicleData.properties.model},
            Manufacturer: ${vehicleData.properties.manufacturer},
            Cargo_capacity: ${vehicleData.properties.cargo_capacity}`
			: "Model: \n, Manufacturer: \n, Cargo_capacity:";

	return <ElementCard title={vehicle.name} description={description} route={route} />;
};

export default VehicleCard;

VehicleCard.propTypes = {
	vehicle: PropTypes.object
};
