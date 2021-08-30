import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";

import ElementCard from "./ElementCard.jsx";

const PersonCard = ({ person }) => {
	const route = `/people/${person.uid}`;
	const [personData, setPersonData] = useState(null);

	function getPersonData() {
		fetch(person.url)
			.then(res => res.json())
			.then(data => {
				setPersonData(data.result);
			})
			.catch(err => console.error(err));
	}

	useEffect(() => {
		getPersonData();
	}, []);

	let description =
		personData !== null
			? `Gender: ${personData.properties.gender},
				Hair Color: ${personData.properties.hair_color},
				Eye Color: ${personData.properties.eye_color}`
			: "";

	return <ElementCard title={person.name} description={description} route={route} />;
};

export default PersonCard;

PersonCard.propTypes = {
	person: PropTypes.object
};
