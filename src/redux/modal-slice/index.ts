import {createSlice} from "@reduxjs/toolkit";

interface initialStateType {
	authorizationModalVisibility: boolean;
	confirmationModalVisibility: boolean;
	trackModalVisibility: boolean;
	modalIsLoading: boolean;
}

let initialState: initialStateType = {
	authorizationModalVisibility: false,
	confirmationModalVisibility: false,
	trackModalVisibility: false,
	modalIsLoading: false,
};

let modalSlice = createSlice({
	initialState,
	name: "Modal",
	reducers: {
		setAuthorizationModalVisibility(state) {
			state.authorizationModalVisibility = !state.authorizationModalVisibility;
		},
		setConfirmationModalVisibility(state) {
			state.confirmationModalVisibility = !state.confirmationModalVisibility;
		},
		setTrackModalVisibility(state) {
			state.trackModalVisibility = !state.trackModalVisibility;
		},
		setModalIsLoading(state) {
			state.modalIsLoading = !state.modalIsLoading;
		},
	},
});

export let {
	setAuthorizationModalVisibility,
	setConfirmationModalVisibility,
	setTrackModalVisibility,
	setModalIsLoading,
} = modalSlice.actions;
export default modalSlice.reducer;
