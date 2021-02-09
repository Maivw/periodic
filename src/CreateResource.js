import React, { useState } from "react";
import "./CreateResource.css";
import TextField from "@material-ui/core/TextField";
import HeaderForm from "./HeaderForm";
import MenuItem from "@material-ui/core/MenuItem";
import resourcesData from "./resources-data.json";
import AddResourcesModal from "./AddResourcesModal";

function CreateResource({ openCreateResource, title }) {
	const [resourceSelected, setResourceSelected] = useState();
	const [modalVisible, setModalVisible] = useState(false);
	const [visibleCreateScreen, setVisibleCreateScreen] = useState(true);
	const handleChange = (event) => {
		setResourceSelected(event.target.value);
	};
	const openAddResourcesModal = () => {
		console.log("again");
		setModalVisible(!modalVisible);
	};

	return (
		<>
			{openCreateResource && visibleCreateScreen ? (
				<div className="createResource">
					<HeaderForm
						title={title}
						onCloseScreen={() => setVisibleCreateScreen(false)}
					/>
					<div className="createResource__body">
						<div className="createResource__sidebar"></div>
						<form
							className="createResource__form"
							noValidate
							autoComplete="off"
						>
							<div className="createResource__title">Basic info</div>
							<div className="createResource__input">
								<TextField
									required
									id="standard-required"
									label="Resource name"
									defaultValue=""
									className="createResource__inputField"
								/>
							</div>
							<div className="createResource__input">
								<TextField
									id="resource selected"
									required
									select
									label="Provider"
									value={resourceSelected}
									onChange={handleChange}
									className="createResource__inputField"
								>
									{resourcesData.map((resource) => (
										<MenuItem key={resource.id} value={resource.name}>
											{resource.name}
										</MenuItem>
									))}
								</TextField>
							</div>
							<div
								className="createResource__button"
								onClick={openAddResourcesModal}
							>
								<div className="createResource__buttonSign"></div>
								<div
									className={`createResource__buttonText ${
										resourceSelected ? "active" : "disable"
									}`}
								>
									ADD RESOURCE
								</div>
							</div>
							{modalVisible ? (
								<AddResourcesModal
									modalVisible={modalVisible}
									onCloseModal={() => setModalVisible(false)}
								/>
							) : null}
						</form>
					</div>
				</div>
			) : null}
		</>
	);
}

export default CreateResource;
