import {createSlice} from "@reduxjs/toolkit";

interface initialStateType {
	authorizationModalVisibility: boolean;
}

let initialState: initialStateType = {
	authorizationModalVisibility: false,
};

let modalSlice = createSlice({
	initialState,
	name: "Modal",
	reducers: {
		setAuthorizationModalVisibility(state) {
			state.authorizationModalVisibility = !state.authorizationModalVisibility;
		},
	},
});

export let {setAuthorizationModalVisibility} = modalSlice.actions;
export default modalSlice.reducer;
