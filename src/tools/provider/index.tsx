import {ReactElement} from "react";
import Modals from "../../components/modals";
import {Provider} from "react-redux";
import {store} from "../../redux/store";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

const ProviderConfig = ({children}: {children: ReactElement}) => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<Modals />
				{children}
			</QueryClientProvider>
		</Provider>
	);
};

export default ProviderConfig;
