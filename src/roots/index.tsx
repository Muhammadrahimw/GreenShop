import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";

export let Root = createBrowserRouter([
	{
		path: `/`,
		element: <Home />,
	},
]);
