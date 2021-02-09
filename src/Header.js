import React from "react";
import "./Header.css";

function Header() {
	return (
		<div className="header">
			<img
				src="https://res.cloudinary.com/maivw/image/upload/v1612802724/image_zgu7h2.png"
				alt="logo"
				className="header__logoImage"
			/>
			<div className="header__userAccount">
				<img
					src="https://res.cloudinary.com/maivw/image/upload/v1612802714/ededede_swga4l.png"
					alt="account"
					className="header__userImage"
				/>
				<p>User</p>
			</div>
		</div>
	);
}

export default Header;
