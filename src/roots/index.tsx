import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import Product from "../pages/product";
import Layout from "../components/layout";

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
		],
	},
]);
