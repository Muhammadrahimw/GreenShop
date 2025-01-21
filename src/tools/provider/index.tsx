import {ReactElement} from "react";
import Modals from "../../components/modals";
import {Provider} from "react-redux";
import {store} from "../../redux/store";
import {QueryClient, QueryClientProvider} from "react-query";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";

const storeAuth = createStore({
	authName: "_auth",
	authType: "cookie",
	cookieDomain: window.location.hostname,
	cookieSecure: window.location.protocol === "https:",
});

const queryClient = new QueryClient();

const ProviderConfig = ({children}: {children: ReactElement}) => {
	return (
		<AuthProvider store={storeAuth}>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<Modals />
					{children}
				</QueryClientProvider>
			</Provider>
		</AuthProvider>
	);
};

export default ProviderConfig;
