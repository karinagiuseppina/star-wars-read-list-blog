import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import { useParams } from "react-router-dom";

import PlanetMoreDetails from "../component/PlanetMoreDetails.jsx";

const PlanetDetails = () => {
	const [planetData, setPlanetData] = useState(null);
	const params = useParams();

	function getPlanetData() {
		fetch(`https://www.swapi.tech/api/planets/${params.id}`)
			.then(res => res.json())
			.then(data => {
				setPlanetData(data.result);
			})
			.catch(err => console.error(err));
	}

	useEffect(() => {
		getPlanetData();
	}, []);

	return <PlanetMoreDetails planet={planetData} />;
};

export default PlanetDetails;
