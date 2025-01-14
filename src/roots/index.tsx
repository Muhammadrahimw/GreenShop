import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import Product from "../pages/product";

export let Root = createBrowserRouter([
	{
		path: `/`,
		element: <Home />,
	},
	{
		path: `/plant/:category/:id`,
		element: <Product />,
	},
]);
