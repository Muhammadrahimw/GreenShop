import {BellOutlined, LoginOutlined} from "@ant-design/icons";
import {Badge} from "antd";
import {Link, useLocation} from "react-router-dom";
import {useReduxDispatch} from "../../hooks/useRedux";
import {setAuthorizationModalVisibility} from "../../redux/modal-slice";

const Navbar = () => {
	let {pathname} = useLocation();
	let dispatch = useReduxDispatch();

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
				<BellOutlined className="text-[1.35em] text-[#3D3D3D]" />
				<Badge count={1}>
					<img src="/src/assets/icons/basket.svg" alt="basket" />
				</Badge>
				<button
					onClick={() => dispatch(setAuthorizationModalVisibility())}
					className="w-[6em] h-9 rounded bg-primary text-white flex items-center gap-1 justify-center"
					type="button"
					title="login">
					<LoginOutlined />
					<p className="mb-[0.1em]">Login</p>
				</button>
			</nav>
		</header>
	);
};

export default Navbar;
