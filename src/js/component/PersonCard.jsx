import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PersonCard = ({ information }) => {
	return (
		<div className="col-3 card">
			<img src="https://via.placeholder.com/350x150" className="card-img-top" />
			<div className="card-body">
				<h5 className="card-title">{information.name}</h5>
				<p className="card-text">
					{information.gender}, {information.eye_color}, {information.eye_color}
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
