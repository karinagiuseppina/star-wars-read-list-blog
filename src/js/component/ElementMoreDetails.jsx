import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";

import ElementProperty from "./ElementProperty.jsx";

const ElementMoreDetails = ({ name, description, properties }) => {
	let porpertiesInHtml = properties.map((property, index) => (
		<ElementProperty key={index} label={property.label} value={property.value} />
	));

	return (
		<div className="container p-2">
			<div className="row">
				<div className="col-6 p-0">
					<img src="https://via.placeholder.com/500x300" alt="Card image cap" />
				</div>
				<div className="col-6 d-flex align-items-center justify-content-center flex-column text-light">
					<h1>{name}</h1>
					<p>{description}</p>
				</div>
			</div>

			<div className="row text-center text-light p-2 mt-2 border-top border-secondary">{porpertiesInHtml}</div>
		</div>
	);
};

export default ElementMoreDetails;

ElementMoreDetails.propTypes = {
	name: PropTypes.string,
	description: PropTypes.string,
	properties: PropTypes.array
};
