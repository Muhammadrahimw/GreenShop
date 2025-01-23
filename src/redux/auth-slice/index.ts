import {createSlice} from "@reduxjs/toolkit";

interface AuthState {
	isAuthenticated: boolean;
}

const initialState: AuthState = {
	isAuthenticated: !!document.cookie.replace(
		/(?:(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$)|^.*$/,
		"$1"
	),
};

const getExpiresDate = (days: number): string => {
	const expires = new Date();
	expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
	return expires.toUTCString();
};

const deleteCookie = (name: string) => {
	document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

const expiresDate = getExpiresDate(1);

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, {payload}) => {
			document.cookie = `authToken=${payload.token}; expires=${expiresDate}; path=/;`;
			document.cookie = `authTokenType=${payload.tokenType}; expires=${expiresDate}; path=/;`;
			document.cookie = `userState=${payload.userState}; expires=${expiresDate}; path=/;`;
			state.isAuthenticated = true;
		},
		logout: (state) => {
			deleteCookie(`authToken`);
			deleteCookie(`authTokenType`);
			deleteCookie(`userState`);
			state.isAuthenticated = false;
		},
	},
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
