import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

const FavoriteListElement = ({ name, route }) => {
	const { store, actions } = useContext(Context);
	function handleDeleteFavorite() {
		actions.deleteFavorite(name);
	}

	return (
		<li>
			<Link to={route}>{name}</Link> <i className="fas fa-trash-alt" onClick={handleDeleteFavorite} />
		</li>
	);
};

export default FavoriteListElement;

FavoriteListElement.propTypes = {
	name: PropTypes.string,
	route: PropTypes.string
};
