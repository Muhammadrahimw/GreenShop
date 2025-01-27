import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import Product from "../pages/product";
import Layout from "../components/layout";
import Shopping from "../pages/shopping";
import Checkout from "../pages/checkout";
import Blog from "../pages/blog";
import BlogUserPost from "../components/blog/blogUserPost";
import Profile from "../pages/profile";
import InformationComp from "../components/profile/information";
import Address from "../components/profile/address";
import Orders from "../components/profile/orders";
import Wishlist from "../components/profile/wishlist";
import OwnProducts from "../components/profile/ownProducts";
import PrivateRoute from "./provate-route";
import {User} from "../pages/user";

export let Root = createBrowserRouter([
	{
		path: `/`,
		element: <Layout />,
		children: [
			{
				path: `/`,
				element: <Home />,
			},
			{
				path: `/plant/:category/:id`,
				element: <Product />,
			},
			{
				path: `/plant/shopping`,
				element: <Shopping />,
			},
			{
				path: `/plant/checkout`,
				element: <Checkout />,
			},
			{
				path: `/blog`,
				element: <Blog />,
			},
			{
				path: `/blog/:id/:user_id`,
				element: <BlogUserPost />,
			},
			{
				path: `/profile`,
				element: <PrivateRoute />,
				children: [
					{
						path: `/profile`,
						element: <Profile />,
						children: [
							{
								path: `details`,
								element: <InformationComp />,
							},
							{
								path: `address`,
								element: <Address />,
							},
							{
								path: `orders`,
								element: <Orders />,
							},
							{
								path: `wishlist`,
								element: <Wishlist />,
							},
							{
								path: `products`,
								element: <OwnProducts />,
							},
						],
					},
				],
			},
			{
				path: `/user`,
				element: <PrivateRoute />,
				children: [
					{
						path: `/user/:id`,
						element: <User />,
					},
				],
			},
		],
	},
]);
