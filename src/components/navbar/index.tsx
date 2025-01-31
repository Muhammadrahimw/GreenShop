import {BellOutlined, LoginOutlined} from "@ant-design/icons";
import {Badge, Popover} from "antd";
import {Link, useLocation} from "react-router-dom";
import {useReduxDispatch, useReduxSelector} from "../../hooks/useRedux";
import {setAuthorizationModalVisibility} from "../../redux/modal-slice";
import {Notification} from "./notification";

const Navbar = () => {
	let {pathname} = useLocation();
	let dispatch = useReduxDispatch();
	let {shop} = useReduxSelector((state) => state.shopSLice);
	let {isAuthenticated} = useReduxSelector((state) => state.authSlice);

	return (
		<header className="flex items-center justify-between gap-4 py-6 border-b border-primary border-opacity-20">
			<nav>
				<Link to={`/`}>
					<img src="/src/assets/icons/logo.svg" alt="logo greenshop" />
				</Link>
			</nav>
			<nav className="flex items-center gap-12">
				<Link to={`/`}>
					<p
						className={`${
							pathname === `/` ? `text-primary font-semibold` : "text-black"
						} hover-underline-animation`}>
						Home
					</p>
				</Link>
				<Link to={`/blog`}>
					<p
						className={`${
							pathname === `/blog` ? `text-primary font-semibold` : "text-black"
						} hover-underline-animation`}>
						Blog
					</p>
				</Link>
			</nav>
			<nav className="flex items-center gap-7">
				<img src="/src/assets/icons/search.svg" alt="search" />
				<Popover
					content={<Notification />}
					title={`Notifications`}
					trigger={"click"}>
					<BellOutlined className="text-[1.35em] text-[#3D3D3D]" />
				</Popover>
				<Badge count={shop.length}>
					<Link to={`/plant/shopping`}>
						<img src="/src/assets/icons/basket.svg" alt="basket" />
					</Link>
				</Badge>
				{isAuthenticated ? (
					<Link to={`/profile/details`}>
						<button
							className="flex items-center justify-center gap-1 px-2 text-white rounded h-9 bg-primary"
							type="button"
							title="login">
							<p className="mb-[0.1em]">
								{
									JSON.parse(
										document.cookie.replace(
											/(?:(?:^|.*;\s*)userState\s*=\s*([^;]*).*$)|^.*$/,
											"$1"
										)
									).name
								}
							</p>
						</button>
					</Link>
				) : (
					<button
						onClick={() => dispatch(setAuthorizationModalVisibility())}
						className="w-[6em] h-9 rounded bg-primary text-white flex items-center gap-1 justify-center"
						type="button"
						title="login">
						<p className="mb-[0.1em]">
							<LoginOutlined /> Login
						</p>
					</button>
				)}
			</nav>
		</header>
	);
};

export default Navbar;
