import {Outlet} from "react-router-dom";
import AccountComp from "./account";

const ProfileComponent = () => {
	return (
		<div className="grid grid-cols-3 gap-9 mt-[3.5em]">
			<AccountComp />
			<div className="col-span-2">
				<Outlet />
			</div>
		</div>
	);
};

export default ProfileComponent;
