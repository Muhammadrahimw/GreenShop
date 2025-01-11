import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface initialStateType {
	authorizationModalVisibility: boolean;
	isProgress: boolean;
}

let initialState: initialStateType = {
	authorizationModalVisibility: false,
	isProgress: false,
};

let modalSlice = createSlice({
	initialState,
	name: "Modal",
	reducers: {
		setAuthorizationModalVisibility(state) {
			state.authorizationModalVisibility = !state.authorizationModalVisibility;
		},
		setProgressState(state, action: PayloadAction<boolean>) {
			state.isProgress = action.payload;
		},
	},
});

export let {setAuthorizationModalVisibility, setProgressState} =
	modalSlice.actions;
export default modalSlice.reducer;
