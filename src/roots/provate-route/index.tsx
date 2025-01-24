import {Navigate, Outlet} from "react-router-dom";
import {useReduxSelector} from "../../hooks/useRedux";

const PrivateRoute = () => {
	const {isAuthenticated} = useReduxSelector((state) => state.authSlice);

	if (!isAuthenticated) {
		return <Navigate to={`/`} replace />;
	}

	return (
		<>
			<Outlet />
		</>
	);
};

export default PrivateRoute;
