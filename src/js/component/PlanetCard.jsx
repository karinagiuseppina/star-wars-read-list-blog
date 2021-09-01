import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";

import ElementCard from "./ElementCard.jsx";

const PlanetCard = ({ planet }) => {
	const route = `/planets/${planet.uid}`;
	const [planetData, setPlanetData] = useState(null);

	function getPlanetData() {
		fetch(planet.url)
			.then(res => res.json())
			.then(data => {
				setPlanetData(data.result);
			})
			.catch(err => console.error(err));
	}

	useEffect(() => {
		getPlanetData();
	}, []);

	let description =
		planetData !== null
			? `Population: ${planetData.properties.population},
            Terrains: ${planetData.properties.terrain}`
			: "Population: , Terrains:";

	return <ElementCard title={planet.name} description={description} route={route} />;
};

export default PlanetCard;

PlanetCard.propTypes = {
	planet: PropTypes.object
};
