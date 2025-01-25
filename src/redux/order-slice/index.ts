import {createSlice} from "@reduxjs/toolkit";
import type {trackingOrderType} from "../../@types";

interface OrderSliceType {
	orderData?: trackingOrderType;
}

const initialState: OrderSliceType = {};

const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {
		setOrderData(state, {payload}) {
			state.orderData = payload;
		},
	},
});

export const {setOrderData} = orderSlice.actions;
export default orderSlice.reducer;
