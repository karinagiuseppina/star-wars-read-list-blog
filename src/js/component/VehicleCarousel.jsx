import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";

import VehicleCard from "./VehicleCard.jsx";

const VehicleCarousel = ({ title, vehicles }) => {
	let vehicleInCards = vehicles.map((vehicle, index) => <VehicleCard key={index} vehicle={vehicle} />);

	return (
		<div>
			<div className="row">
				<div className="col text-center">
					<h1>{title}</h1>
				</div>
			</div>
			<div className="row p-4">
				<div className="carouselCards">{vehicleInCards}</div>
			</div>
		</div>
	);
};

export default VehicleCarousel;

VehicleCarousel.propTypes = {
	title: PropTypes.string,
	vehicles: PropTypes.array
};
