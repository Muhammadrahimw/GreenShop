import {useDispatch, useSelector} from "react-redux";
import {setProgressState} from "../../redux/modal-slice";

export const useProgress = () => {
	const dispatch = useDispatch();
	const isProgress = useSelector((state: any) => state.modalSlice.isProgress);

	const setIsProgress = (state: boolean) => {
		dispatch(setProgressState(state));
	};

	return {isProgress, setIsProgress};
};
