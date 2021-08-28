import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";

import CarouselList from "../component/CarouselList.jsx";

const Home = () => {
	const [people, setPeople] = useState([]);
	const [vehicles, setVehicles] = useState([]);
	const [planets, setPlanets] = useState([]);

	async function getElements(element, set) {
		await fetch(`https://www.swapi.tech/api/${element}`)
			.then(res => res.json())
			.then(data => set(data.results))
			.catch(err => console.error(err));
	}

	// useEffect(
	// 	() => {
	// 		console.log(people);
	// 	},
	// 	[people]
	// );

	// useEffect(
	// 	() => {
	// 		console.log(vehicles);
	// 	},
	// 	[vehicles]
	// );

	// useEffect(
	// 	() => {
	// 		console.log(planets);
	// 	},
	// 	[planets]
	// );

	useEffect(() => {
		getElements("people", setPeople);
		getElements("vehicles", setVehicles);
		getElements("planets", setPlanets);
	}, []);

	return (
		<div className="container-fluid">
			<CarouselList title="people" list={people} />
		</div>
	);
};

export default Home;
