import React, { useContext } from "react";
import Popper from "popper.js";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import "bootstrap/js/dist/dropdown";
import { Context } from "../store/appContext";

export const Navbar = () => {
	// let fav = ["luke", "pepe"];
	// let favorites = localStorage.setItem("Favorites", fav.join(","));
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="#">
				Navbar
			</a>
			<div>
				<ul>
					{store.favorites.map((favorite, index) => (
						<li key={index}>{favorite}</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

{
	/* <nav className="navbar navbar-dark bg-secondary mb-3">
<Link to="/">
	<span className="navbar-brand mb-0 h1">Star Wars</span>
</Link>
<div className="ml-auto">
	<ul className="navbar-nav mr-auto">
		<li className="nav-item dropdown">
			<a
				className="nav-link dropdown-toggle"
				to="#"
				id="navbarDropdown"
				role="button"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				Dropdown
			</a>
			<div className="dropdown-menu" aria-labelledby="navbarDropdown">
				<Link className="dropdown-item" to="#">
					Action
				</Link>
				<Link className="dropdown-item" to="#">
					Another action
				</Link>
				<div className="dropdown-divider" />
				<Link className="dropdown-item" to="#">
					Something else here
				</Link>
			</div>
		</li>
	</ul>
</div>
</nav> */
}
