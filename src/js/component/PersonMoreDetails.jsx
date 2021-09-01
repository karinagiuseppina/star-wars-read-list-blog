import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";

import ElementMoreDetails from "./ElementMoreDetails.jsx";

const PersonMoreDetails = ({ person }) => {
	if (person === null) {
		return <div className="container" />;
	}

	let properties = [
		{ label: "Name", value: person.properties.name },
		{ label: "Birth Year", value: person.properties.birth_year },
		{ label: "Gender", value: person.properties.gender },
		{ label: "Height", value: person.properties.height },
		{ label: "Skin Color", value: person.properties.skin_color },
		{ label: "Eye Color", value: person.properties.eye_color }
	];

	return (
		<ElementMoreDetails name={person.properties.name} description={person.description} properties={properties} />
	);
};

export default PersonMoreDetails;

PersonMoreDetails.propTypes = {
	person: PropTypes.object
};

{
	/* <div className="container p-2">
<div className="row">
	<div className="col-6 p-0">
		<img src="https://via.placeholder.com/500x300" alt="Card image cap" />
	</div>
	<div className="col-6 d-flex align-items-center justify-content-center flex-column text-light">
		<h1>{person.properties.name}</h1>
		<p>{person.description}</p>
	</div>
</div>

<div className="row text-center text-light p-2 mt-2 border-top border-secondary">
	<ElementProperty label="Name" value={person.properties.name} />
	<ElementProperty label="Birth Year" value={person.properties.birth_year} />
	<ElementProperty label="Gender" value={person.properties.gender} />
	<ElementProperty label="Height" value={person.properties.height} />
	<ElementProperty label="Skin Color" value={person.properties.skin_color} />
	<ElementProperty label="Eye Color" value={person.properties.eye_color} />
</div>
</div> */
}
