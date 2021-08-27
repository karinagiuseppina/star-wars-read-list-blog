import React, { useState } from "react";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";

export const Home = () => (
	<div className="container-fluid">
		<div className="row">
			<div className="col text-center">
				<h1>Category</h1>
			</div>
		</div>
		<div className="row">
			<div className="col-3 m-auto text-center">
				<div className="card">
					<img src="https://via.placeholder.com/350x150" className="card-img-top" />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick.</p>
						<Link to="#" className="btn btn-primary">
							Go somewhere
						</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
);
