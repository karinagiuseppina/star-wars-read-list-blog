import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";

import PersonMoreDetails from "../component/PersonMoreDetails.jsx";

const PersonDetails = () => {
	const [personData, setPersonData] = useState({});
	const params = useParams();

	async function getPersonData() {
		await fetch(`https://www.swapi.tech/api/people/${params.id}`)
			.then(res => res.json())
			.then(data => {
				console.log(data.result);
				setPersonData(data.result);
			})
			.catch(err => console.error(err));
	}

	useEffect(() => {
		getPersonData();
	}, []);

	return <PersonMoreDetails person={personData} />;
};

export default PersonDetails;
