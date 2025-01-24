import {LoginOutlined} from "@ant-design/icons";
import {MyAccountPoints} from "../../../utils";
import {useLocation, useNavigate} from "react-router-dom";
import {useReduxDispatch} from "../../../hooks/useRedux";
import {logout} from "../../../redux/auth-slice";

const AccountComp = () => {
	const activeStyle: string = `text-primary font-semibold`;
	const navigate = useNavigate();
	const {pathname} = useLocation();
	const dispatch = useReduxDispatch();
	return (
		<section className="bg-[#FBFBFB] px-[1.05em] py-[0.95em]">
			<h2 className="text-[1.15em] font-bold text-[#3D3D3D] mb-2">
				My Account
			</h2>
			{MyAccountPoints.map((value) => (
				<div
					onClick={() => navigate(`/profile/${value.path}`)}
					key={value.id}
					className={`flex items-center gap-3 cursor-pointer text-[1.15em] mt-5 pl-2 ${
						pathname.slice(9) === value.path ? activeStyle : ""
					} ${
						pathname.slice(9) === value.path ? `border-l-4 border-primary` : ""
					}`}>
					<span
						className={`text-[1.1em] text-[#727272] ${
							pathname.slice(9) === value.path ? activeStyle : ""
						}`}>
						{value.icon}
					</span>
					<p
						className={`text-[#727272] ${
							pathname.slice(9) === value.path ? activeStyle : ""
						}`}>
						{value.title}
					</p>
				</div>
			))}
			<div className="mb-4"></div>
			<div
				onClick={() => {
					dispatch(logout());
					navigate(`/`);
				}}
				className="flex items-center gap-2 pt-4 pb-1 pl-2 text-[1.15em] border-t text-primary cursor-pointer font-semibold">
				<LoginOutlined className="text-primary" />
				Loguot
			</div>
		</section>
	);
};

export default AccountComp;
