import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import PersonCard from "./PersonCard.jsx";

const CarouselList = ({ title, list }) => {
	let peopleInCards = list.map(async function(person, index) {
		let response = await fetch(person.url);
		let responseJson = await response.json();
		let render = <PersonCard key={index} information={responseJson.result} />;
		return render;
	});

	console.log(peopleInCards);

	return (
		<div>
			<div className="row">
				<div className="col text-center">
					<h1>{title}</h1>
				</div>
			</div>
			<div className="row"> {peopleInCards}</div>
		</div>
	);
};

export default CarouselList;

CarouselList.propTypes = {
	title: PropTypes.string,
	list: PropTypes.array
};
