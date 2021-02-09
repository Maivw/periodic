import React, { useState } from "react";
import "./ConfigurationNavbar.css";
import ShowResourcesModal from "./ShowResourcesModal";

function ConfigurationNavbar({ open }) {
	const [showResources, setShowResources] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const openResources = (event) => {
		setShowResources(!showResources);
		setAnchorEl(event.currentTarget);
	};
	return (
		<div className="configurationNav__wrapper">
			<div className={`configurationNav ${open ? "active" : "hidden"}`}>
				<div className="configurationNav__column">providers</div>
				<div className="configurationNav__column">bookables</div>
				<div className="configurationNav__column" onClick={openResources}>
					resources
				</div>
				<div className="configurationNav__column">forms</div>
				<div className="configurationNav__column">messages</div>
			</div>
			{showResources ? (
				<ShowResourcesModal
					showModal={showResources}
					// onCloseResources={() => setShowResources(!showResources)}
					anchorEl={anchorEl}
					setAnchorEl={() => setAnchorEl(null)}
				/>
			) : null}
		</div>
	);
}

export default ConfigurationNavbar;
