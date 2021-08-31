import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const ElementCard = ({ title, description, route }) => {
	const { store, actions } = useContext(Context);
	const [classProperty, setClassProperty] = useState("btn btn-outline-warning");

	function handleOnClick() {
		if (store.favorites.findIndex(fav => fav.name == title) === -1) {
			setClassProperty("btn btn-warning");
			actions.addFavorite(title, route);
		} else {
			setClassProperty("btn btn-outline-warning");
			actions.deleteFavorite(title);
		}
	}

	useEffect(
		() => {
			if (store.favorites.findIndex(fav => fav.name == title) !== -1) setClassProperty("btn btn-warning");
		},
		[classProperty]
	);
	return (
		<div className="col-3 p-2">
			<div className="card border-secondary">
				<img src="https://via.placeholder.com/350x150" className="card-img-top" />
				<div className="card-body bg-secondary text-center">
					<h5 className="card-title">{title}</h5>
					<p className="card-text text-light text-left">{description}</p>
					<div className="d-flex justify-content-around">
						<Link to={route} className="btn btn-dark">
							Learn more!
						</Link>
						<button type="button" className={classProperty} onClick={handleOnClick}>
							<i className="fas fa-heart" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ElementCard;

ElementCard.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	route: PropTypes.string
};
