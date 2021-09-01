import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import FavoriteListElement from "./FavoriteListElement.jsx";
import { Link } from "react-router-dom";

import DropdownButton from "react-bootstrap/DropdownButton";

export const Navbar = () => {
	const { store } = useContext(Context);

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-secondary d-flex justify-content-around">
			<Link className="navbar-brand text-dark" to="/">
				Star Wars
			</Link>
			<DropdownButton
				id="dropdown-button-dark-example2"
				variant="secondary"
				menuVariant="dark"
				title="Favorites"
				className="mt-2">
				{store.favorites.map((favorite, index) => (
					<FavoriteListElement key={index} name={favorite.name} route={favorite.route} />
				))}
			</DropdownButton>
		</nav>
	);
};

{
	/* <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
<a className="navbar-brand" href="#">
	Star Wars
</a>
<div>
	<ul>
		{store.favorites.map((favorite, index) => (
			<FavoriteListElement key={index} name={favorite.name} route={favorite.route} />
		))}
	</ul>
</div>
</nav> 


			{/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
				{store.favorites.map((favorite, index) => (
					<FavoriteListElement key={index} name={favorite.name} route={favorite.route} />
				))}
			</DropdownButton>*/
}
