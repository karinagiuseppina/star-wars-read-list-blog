import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import FavoriteListElement from "./FavoriteListElement.jsx";

export const Navbar = () => {
	const { store } = useContext(Context);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-secondary">
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
			<div className="dropdown">
				<button
					className="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Dropdown button
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a className="dropdown-item" href="#">
						Action
					</a>
					<a className="dropdown-item" href="#">
						Another action
					</a>
					<a className="dropdown-item" href="#">
						Something else here
					</a>
				</div>
			</div>
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
</nav> */
}
