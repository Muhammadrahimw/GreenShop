import {ReactElement} from "react";
import Modals from "../../components/modals";
import {Provider} from "react-redux";
import {store as reduxStore} from "../../redux/store";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

const ProviderConfig = ({children}: {children: ReactElement}) => {
	return (
		<Provider store={reduxStore}>
			<QueryClientProvider client={queryClient}>
				<Modals />
				{children}
			</QueryClientProvider>
		</Provider>
	);
};

export default ProviderConfig;
