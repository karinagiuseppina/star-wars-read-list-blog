import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const FavoriteListElement = ({ name, route }) => {
	const { store, actions } = useContext(Context);
	function handleDeleteFavorite() {
		actions.deleteFavorite(name);
	}

	return (
		<Dropdown.Item>
			<div className="d-flex justify-content-stretch">
				<Link to={route} className="flex-grow-1">
					{name}
				</Link>{" "}
				<i className="fas fa-trash-alt" onClick={handleDeleteFavorite} />
			</div>
		</Dropdown.Item>
	);
};

export default FavoriteListElement;

FavoriteListElement.propTypes = {
	name: PropTypes.string,
	route: PropTypes.string
};
