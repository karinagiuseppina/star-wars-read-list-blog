import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";

import PersonCard from "./PersonCard.jsx";

const PersonCarousel = ({ title, people }) => {
	let peopleInCards = people.map((person, index) => <PersonCard key={index} person={person} />);

	return (
		<div>
			<div className="row">
				<div className="col text-center">
					<h1>{title}</h1>
				</div>
			</div>
			<div className="row p-4">
				<div className="carouselCards">{peopleInCards}</div>
			</div>
		</div>
	);
};

export default PersonCarousel;

PersonCarousel.propTypes = {
	title: PropTypes.string,
	people: PropTypes.array
};
