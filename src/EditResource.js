import React, { useState } from "react";
import "./EditResource.css";
import HeaderForm from "./HeaderForm";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import resourcesData from "./resources-data.json";
import EditResourcesModal from "./EditResourcesModal";

function EditResource({ title, openEditResource }) {
	const [resourceSelected, setResourceSelected] = useState();
	const [visibleEditScreen, setVisibleEditScreen] = useState(true);
	const [modalEditVisible, setModalEditVisible] = useState(false);
	const handleChangeInput = (event) => {
		setResourceSelected(event.target.value);
	};

	return (
		<>
			{openEditResource && visibleEditScreen && (
				<div className="editResource">
					<HeaderForm
						title={title}
						onCloseScreen={() => setVisibleEditScreen(false)}
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
									onChange={handleChangeInput}
									className="createResource__inputField"
								>
									{resourcesData.map((resource) => (
										<MenuItem key={resource.id} value={resource.name}>
											{resource.name}
										</MenuItem>
									))}
								</TextField>
							</div>
							<div className="createResource__button">
								<div className="createResource__buttonSign"></div>
								<div>ADD RESOURCE</div>
							</div>
							<EditResourcesModal
								modalVisible={modalEditVisible}
								onCloseModal={() => setModalEditVisible(false)}
							/>
						</form>
					</div>
				</div>
			)}
		</>
	);
}

export default EditResource;
