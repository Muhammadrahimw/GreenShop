import {UserStateType} from "../../@types";

export const GetUserInfo = () => {
	const data = document.cookie.replace(
		/(?:(?:^|.*;\s*)userState\s*=\s*([^;]*).*$)|^.*$/,
		"$1"
	);
	return JSON.parse(data) as UserStateType;
};
