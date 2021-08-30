import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import PersonCard from "./PersonCard.jsx";

const CarouselList = ({ title, list }) => {
	let peopleInCards = list.map(async function(person, index) {
		// let response = await fetch(person.url);
		// let responseJson = await response.json();
		// return responseJson;
		await fetch(person.url)
			.then(res => res.json())
			.then(data => {
				return data.result;
			})
			.catch(err => console.error(err));
	});
	console.log(peopleInCards);

	let peopleInCardsOne = peopleInCards.map((info, index) => <PersonCard key={index} information={info} />);

	return (
		<div>
			<div className="row">
				<div className="col text-center">
					<h1>{title}</h1>
				</div>
			</div>
			<div className="row p-4">
				<div className="carouselCards">{peopleInCardsOne}</div>
			</div>
		</div>
	);
};

export default CarouselList;

CarouselList.propTypes = {
	title: PropTypes.string,
	list: PropTypes.array
};
