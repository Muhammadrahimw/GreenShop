import {useMutation} from "react-query";
import {useAxios} from "../../useAxios";
import {useReduxDispatch} from "../../useRedux";
import {setCoupon, setIsLoading} from "../../../redux/coupon-slice";
import {couponType} from "../../../@types";

const useGetCoupon = () => {
	const axios = useAxios();
	const dispatch = useReduxDispatch();
	return useMutation({
		mutationFn: (data: object) => {
			dispatch(setIsLoading());
			return axios({url: `/features/coupon`, body: data, params: data});
		},
		onSuccess: (data: couponType) => {
			dispatch(setIsLoading());
			dispatch(setCoupon(data.data.discount_for));
		},
		onError: () => alert(`coupon is not defined`),
	});
};

export {useGetCoupon};
