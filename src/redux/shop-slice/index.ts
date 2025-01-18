import {createSlice} from "@reduxjs/toolkit";
import {getStore, setStore} from "../../components/store";
import {PlantTypes} from "../../@types";

const initialState = {
	shop: getStore(`shop`) || [],
};

export const shopSLice = createSlice({
	name: "shop",
	initialState,
	reducers: {
		getProductShop(state, {payload}) {
			let checkingProducts = state.shop.some(
				(value: PlantTypes) => value._id === payload._id
			);
			if (!checkingProducts) {
				payload = {...payload, count: 1};
				state.shop = [...state.shop, payload];
				setStore(`shop`, state.shop);
			}
		},
		deleteProductShop(state, {payload}) {
			state.shop = state.shop.filter(
				(value: PlantTypes) => value._id !== payload
			);
			setStore(`shop`, state.shop);
		},
		incrementProductShop(state, {payload}) {
			let incrementIndex = state.shop.findIndex(
				(value: PlantTypes) => value._id === payload
			);
			state.shop[incrementIndex].count += 1;
			setStore(`shop`, state.shop);
		},
		decrementProductShop(state, {payload}) {
			let decrementIndex = state.shop.findIndex(
				(value: PlantTypes) => value._id === payload
			);
			state.shop[decrementIndex].count > 1
				? (state.shop[decrementIndex].count -= 1)
				: "";
			setStore(`shop`, state.shop);
		},
	},
});

export const {
	getProductShop,
	deleteProductShop,
	incrementProductShop,
	decrementProductShop,
} = shopSLice.actions;
export default shopSLice.reducer;
