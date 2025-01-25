import {Outlet} from "react-router-dom";
import AccountComp from "./account";

const ProfileComponent = () => {
	return (
		<div className="grid grid-cols-[0.7fr_2fr] gap-9 mt-[3.5em]">
			<AccountComp />
			<div className="">
				<Outlet />
			</div>
		</div>
	);
};

export default ProfileComponent;
