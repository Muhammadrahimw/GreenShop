import {createSlice} from "@reduxjs/toolkit";
import {getStore, setStore} from "../../components/store";
import {PlantTypes} from "../../@types";
import {useAxios} from "../../hooks/useAxios";

const initialState = {
	wishlist: getStore(`wishlist`) || [],
};

const axios = useAxios();

export const wishlistSlice = createSlice({
	name: "wishlist",
	initialState,
	reducers: {
		wishlistProduct(state, {payload}) {
			let checkingProducts = state.wishlist.some(
				(value: PlantTypes) => value._id === payload._id
			);
			if (checkingProducts) {
				state.wishlist = state.wishlist.filter(
					(value: PlantTypes) => value._id !== payload._id
				);
				setStore(`wishlist`, state.wishlist);
				axios({
					url: `/user/delete-wishlist`,
					method: "DELETE",
					body: {
						_id: payload._id,
					},
				})
					.then((data) => data)
					.catch((error) => console.log(error));
			} else {
				state.wishlist = [...state.wishlist, payload];
				setStore(`wishlist`, state.wishlist);
				axios({
					url: `/user/create-wishlist`,
					method: "POST",
					body: {
						route_path: payload.category,
						flower_id: payload._id,
					},
				})
					.then((data) => data)
					.catch((error) => console.log(error));
			}
		},
	},
});

export const {wishlistProduct} = wishlistSlice.actions;
export default wishlistSlice.reducer;
