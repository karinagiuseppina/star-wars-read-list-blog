import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";

const ElementProperty = ({ label, value }) => {
	return (
		<div className="col">
			<p className="font-weight-bold p-2">{label}</p>
			{value}
		</div>
	);
};

export default ElementProperty;

ElementProperty.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string
};
