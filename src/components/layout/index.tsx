import {Outlet} from "react-router-dom";
import Footer from "../footer";
import Navbar from "../navbar";

const Layout = () => {
	return (
		<div className="w-[90%] mx-auto">
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
