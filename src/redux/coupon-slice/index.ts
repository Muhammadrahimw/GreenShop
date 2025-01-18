import {createSlice} from "@reduxjs/toolkit";

interface initialStateType {
	isLoading: boolean;
	coupon: number;
}

const initialState: initialStateType = {
	isLoading: false,
	coupon: 0,
};

const couponSlice = createSlice({
	name: "coupon",
	initialState,
	reducers: {
		setCoupon(state, {payload}) {
			state.coupon = payload;
		},
		setIsLoading(state) {
			state.isLoading = !state.isLoading;
		},
	},
});

export const {setCoupon, setIsLoading} = couponSlice.actions;
export default couponSlice.reducer;
