import {Modal} from "antd";
import {useReduxDispatch, useReduxSelector} from "../../../hooks/useRedux";
import {setAuthorizationModalVisibility} from "../../../redux/modal-slice";
import {useState} from "react";
import Login from "./login";
import Register from "./register";

const AuthorizationModal = () => {
	let {authorizationModalVisibility} = useReduxSelector(
		(state) => state.modalSlice
	);
	let dispatch = useReduxDispatch();
	let modalStyle = `text-xl font-medium cursor-pointer`;
	let [login, setLogin] = useState<boolean>(true);

	return (
		<Modal
			open={authorizationModalVisibility}
			onCancel={() => dispatch(setAuthorizationModalVisibility())}
			footer={false}>
			<div className="flex items-center justify-center gap-8">
				<p
					onClick={() => setLogin(true)}
					className={`${modalStyle} ${login ? `text-primary` : `text-black`}`}>
					Login
				</p>
				<div className="w-[1px] h-5 bg-gray-500"></div>
				<p
					onClick={() => setLogin(false)}
					className={`${modalStyle} ${login ? `text-black` : `text-primary`}`}>
					Register
				</p>
			</div>
			{login ? <Login /> : <Register />}
		</Modal>
	);
};

export default AuthorizationModal;
