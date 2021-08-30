import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";

import PlanetCard from "./PlanetCard.jsx";

const PlanetCarousel = ({ title, planets }) => {
	let planetsInCards = planets.map((planet, index) => <PlanetCard key={index} planet={planet} />);

	return (
		<div>
			<div className="row">
				<div className="col text-center">
					<h1>{title}</h1>
				</div>
			</div>
			<div className="row p-4">
				<div className="carouselCards">{planetsInCards}</div>
			</div>
		</div>
	);
};

export default PlanetCarousel;

PlanetCarousel.propTypes = {
	title: PropTypes.string,
	planets: PropTypes.array
};
