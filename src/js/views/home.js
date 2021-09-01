import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import PersonCarousel from "../component/PersonCarousel.jsx";
import VehicleCarousel from "../component/VehicleCarousel.jsx";
import PlanetCarousel from "../component/PlanetCarousel.jsx";

const Home = () => {
	const [people, setPeople] = useState([]);
	const [vehicles, setVehicles] = useState([]);
	const [planets, setPlanets] = useState([]);

	function getElements(element, set) {
		fetch(`https://www.swapi.tech/api/${element}`)
			.then(res => res.json())
			.then(data => {
				set(data.results);
			})
			.catch(err => console.error(err));
	}

	useEffect(() => {
		getElements("people", setPeople);
		getElements("vehicles", setVehicles);
		getElements("planets", setPlanets);
	}, []);

	return (
		<div className="container pt-4">
			<PersonCarousel title="Characters" people={people} />
			<PlanetCarousel title="Planets" planets={planets} />
			<VehicleCarousel title="Vehicles" vehicles={vehicles} />
		</div>
	);
};

export default Home;
