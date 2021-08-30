import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";

import ElementProperty from "./ElementProperty.jsx";

const PersonMoreDetails = ({ person }) => {
	if (JSON.stringify(person) === JSON.stringify({})) {
		return <div className="container" />;
	}

	return (
		<div className="container">
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
		</div>
	);
};

export default PersonMoreDetails;

PersonMoreDetails.propTypes = {
	person: PropTypes.object
};
