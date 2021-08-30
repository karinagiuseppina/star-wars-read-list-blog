import React from "react";
import Popper from "popper.js";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="#">
				Navbar
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNavDropdown">
				<ul className="navbar-nav">
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdownMenuLink"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Dropdown link
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
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
					</li>
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
