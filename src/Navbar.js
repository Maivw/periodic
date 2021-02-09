import React, { useState } from "react";
import "./Navbar.css";
import ConfigurationNavbar from "./ConfigurationNavbar";

function Navbar() {
	const [openConfiguration, setOpenConfiguration] = useState(false);
	const openConfig = () => {
		setOpenConfiguration(!openConfiguration);
	};
	return (
		<>
			<div className="navbar">
				<div className="navbar__column">HOME</div>
				<div className="navbar__column">ACTIVITY</div>
				<div className="navbar__column">USER</div>
				<div className="navbar__column" onClick={openConfig}>
					CONFIGURATION
				</div>
				<div className="navbar__column">SETTINGS</div>
			</div>
			{openConfiguration ? (
				<ConfigurationNavbar open={openConfiguration} />
			) : null}
		</>
	);
}

export default Navbar;
