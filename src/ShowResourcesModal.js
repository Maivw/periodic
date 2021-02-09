import React, { useState } from "react";
import "./ShowResourcesModal.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import resourcesData from "./resources-data.json";
import CreateResource from "./CreateResource";
import EditResource from "./EditResource";

function ShowResourcesModal({
	showModal,
	anchorEl,
	onCloseResources,
	setAnchorEl,
}) {
	const [openCreateResource, setOpenCreateResource] = useState(false);
	const [openEditResource, setOpenEditResource] = useState(false);
	const [title, setTitle] = useState(false);
	const handleClose = () => {
		// onCloseResources(false);
		setAnchorEl(null);
	};
	const openCreateForm = () => {
		setOpenCreateResource(true);

		// handleClose();
	};
	const openEditForm = (id, name) => {
		console.log("val", id);
		console.log("val222", name);
		setOpenEditResource(id);
		setTitle(name);
		//handleClose();
	};
	return (
		<div className={`resourcesModal ${showModal ? "active" : "hidden"}`}>
			{openCreateResource ? (
				<CreateResource
					openCreateResource={openCreateResource}
					title="Create"
				/>
			) : null}

			{openEditResource ? (
				<EditResource openEditResource={openEditResource} title={title} />
			) : null}

			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem onClick={openCreateForm}>Create</MenuItem>
				{resourcesData?.map((data) => (
					<MenuItem
						onClick={() => openEditForm(data.id, data.name)}
						key={data.id}
					>
						{data.name}
					</MenuItem>
				))}
			</Menu>
		</div>
	);
}

export default ShowResourcesModal;
