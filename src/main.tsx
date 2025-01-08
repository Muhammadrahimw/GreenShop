import {createRoot} from "react-dom/client";
import "./index.css";
import ProviderConfig from "./tools/provider/index.tsx";
import {Root} from "./roots/index.tsx";
import {RouterProvider} from "react-router-dom";
import AuthProvider from "react-auth-kit";

createRoot(document.getElementById("root")!).render(
	<ProviderConfig>
		{/* <AuthProvider
			authType="localstorage"
			authName="_auth"
			cookieDomain={window.location.hostname}
			cookieSecure={window.location.protocol === "https:"}> */}
		<RouterProvider router={Root} />
		{/* </AuthProvider> */}
	</ProviderConfig>
);
