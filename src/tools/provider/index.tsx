import {ReactElement} from "react";
import {Provider} from "react-redux";
import {store as reduxStore} from "../../redux/store";
import {QueryClient, QueryClientProvider} from "react-query";
import Modals from "../../components/modals";

const queryClient = new QueryClient();

const ProviderConfig = ({children}: {children: ReactElement}) => {
	return (
		<Provider store={reduxStore}>
			<QueryClientProvider client={queryClient}>
				{children}
				<Modals />
			</QueryClientProvider>
		</Provider>
	);
};

export default ProviderConfig;
