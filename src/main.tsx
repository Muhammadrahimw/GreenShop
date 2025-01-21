import {createRoot} from "react-dom/client";
import "./index.css";
import ProviderConfig from "./tools/provider/index.tsx";
import {Root} from "./roots/index.tsx";
import {RouterProvider} from "react-router-dom";




createRoot(document.getElementById("root")!).render(
	<ProviderConfig>
			<RouterProvider router={Root} />
	</ProviderConfig>
);
