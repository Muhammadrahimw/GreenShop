import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import Product from "../pages/product";
import Layout from "../components/layout";
import Shopping from "../pages/shopping";
import Checkout from "../pages/checkout";
import Blog from "../pages/blog";
import BlogUserPost from "../components/blog/blogUserPost";

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
				path: "/blog/:id/:user_id",
				element: <BlogUserPost />,
			},
		],
	},
]);
