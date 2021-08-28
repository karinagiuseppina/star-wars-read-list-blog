import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import PersonCard from "./PersonCard.jsx";

const CarouselList = ({ title, list }) => {
	let elementsInCards = [];
	
	for (let i = 0; i<list.length; i++){
		let response = await fetch(element.url);
		let peopleElement = await response.json();
		elementsInCards.append(<PersonCard information={peopleElement.result.properties} />);
	}
	

	console.log(elementsInCards);

	return (
		<div>
			<div className="row">
				<div className="col text-center">
					<h1>{title}</h1>
				</div>
			</div>
			<div className="row">{elementsInCards}</div>
		</div>
	);
};

export default CarouselList;

CarouselList.propTypes = {
	title: PropTypes.string,
	list: PropTypes.array
};
