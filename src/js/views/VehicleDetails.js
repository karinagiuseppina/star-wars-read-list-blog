import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import { useParams } from "react-router-dom";

import VehicleMoreDetails from "../component/VehicleMoreDetails.jsx";

const VehicleDetails = () => {
	const [vehicleData, setVehicleData] = useState(null);
	const params = useParams();

	function getVehicleData() {
		fetch(`https://www.swapi.tech/api/vehicles/${params.id}`)
			.then(res => res.json())
			.then(data => {
				setVehicleData(data.result);
			})
			.catch(err => console.error(err));
	}

	useEffect(() => {
		getVehicleData();
	}, []);

	return <VehicleMoreDetails vehicle={vehicleData} />;
};

export default VehicleDetails;
