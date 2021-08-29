import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";

import CarouselList from "../component/CarouselList.jsx";

const Home = () => {
	const [people, setPeople] = useState([]);
	const [vehicles, setVehicles] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [peopleData, setPeopleData] = useState([]);

	async function getElements(element, set) {
		await fetch(`https://www.swapi.tech/api/${element}`)
			.then(res => res.json())
			.then(data => {
				set(data.results);
				getPeople(data.results);
			})
			.catch(err => console.error(err));
	}
	async function getPeople(list) {
		let peopleInfo = [];
		await list.forEach(async element => {
			let response = await fetch(element.url);
			let responseJson = await response.json();
			console.log(responseJson.result);
			peopleInfo.push(responseJson.result);
		});
		console.log("people infor: ", peopleInfo);
		setPeopleData(peopleInfo);
	}

	useEffect(() => {
		getElements("people", setPeople);
		// getElements("vehicles", setVehicles);
		// getElements("planets", setPlanets);
	}, []);

	useEffect(
		() => {
			console.log(peopleData);
		},
		[peopleData]
	);

	return (
		<div className="container-fluid">
			<CarouselList title="people" list={peopleData} />
		</div>
	);
};

export default Home;
