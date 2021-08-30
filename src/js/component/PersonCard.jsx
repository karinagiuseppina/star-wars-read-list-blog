import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PersonCard = ({ information }) => {
	let PersonProperties = information.result.properties;
	console.log(PersonProperties);
	return (
		<div className="col-3 card mx-1">
			<img src="https://via.placeholder.com/350x150" className="card-img-top" />
			<div className="card-body">
				<h5 className="card-title">{PersonProperties.name}</h5>
				<p className="card-text">
					Gender: {PersonProperties.gender}
					Eye Color: {PersonProperties.eye_color}
					Hair Color: {PersonProperties.hair_color}
				</p>
				<Link to="#" className="btn btn-primary">
					Learn more!
				</Link>
			</div>
		</div>
	);
};

export default PersonCard;

PersonCard.propTypes = {
	information: PropTypes.object
};
