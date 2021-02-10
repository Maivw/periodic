import React, { useState } from "react";
import "./ConfigurationNavbar.css";
import Grid from "@material-ui/core/Grid";
import CreateResource from "../CreateResource/CreateResource";

function ConfigurationNavbar({ open }) {
	const [showResources, setShowResources] = useState(false);
	const openResources = () => {
		setShowResources(!showResources);
	};
	return (
		<>
			<Grid
				container
				item
				className={`configurationNav ${open ? "active" : "hidden"}`}
				style={{ display: "flex", flexDirection: "row" }}
			>
				<Grid item xs={2} className="configurationNav__column">
					providers
				</Grid>
				<Grid item xs={2} className="configurationNav__column">
					bookables
				</Grid>
				<Grid
					item
					xs={2}
					className="configurationNav__column"
					onClick={openResources}
				>
					resources
				</Grid>
				<Grid item xs={2} className="configurationNav__column">
					forms
				</Grid>
				<Grid item xs={2} className="configurationNav__column">
					messages
				</Grid>
			</Grid>
			{showResources ? <CreateResource showModal={showResources} /> : null}
		</>
	);
}

export default ConfigurationNavbar;
