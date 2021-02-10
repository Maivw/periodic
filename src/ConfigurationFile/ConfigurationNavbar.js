import React, { useState } from "react";
import "./ConfigurationNavbar.css";
// import ShowResourcesModal from "../ShowListResource/ShowResourcesModal";
import Grid from "@material-ui/core/Grid";
import CreateResource from "../CreateResource/CreateResource";

// function ConfigurationNavbar({ open }) {
// 	const [showResources, setShowResources] = useState(false);
// 	const [anchorEl, setAnchorEl] = useState(null);
// 	const openResources = (event) => {
// 		setShowResources(!showResources);
// 		setAnchorEl(event.currentTarget);
// 	};
// 	return (
// 		<div className="configurationNav__wrapper">
// 			<div className={`configurationNav ${open ? "active" : "hidden"}`}>
// 				<div className="configurationNav__column">providers</div>
// 				<div className="configurationNav__column">bookables</div>
// 				<div className="configurationNav__column" onClick={openResources}>
// 					resources
// 				</div>
// 				<div className="configurationNav__column">forms</div>
// 				<div className="configurationNav__column">messages</div>
// 			</div>
// 			{showResources ? (
// 				<ShowResourcesModal
// 					showModal={showResources}
// 					// onCloseResources={() => setShowResources(!showResources)}
// 					anchorEl={anchorEl}
// 					setAnchorEl={() => setAnchorEl(null)}
// 				/>
// 			) : null}
// 		</div>
// 	);
// }
function ConfigurationNavbar({ open }) {
	const [showResources, setShowResources] = useState(false);
	const openResources = (event) => {
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
