import {configureStore} from "@reduxjs/toolkit";
import modalSlice from "./modal-slice";
import shopSLice from "./shop-slice";
import couponSlice from "./coupon-slice";
import authSlice from "./auth-slice";
import wishlistSlice from "./wishlist-slice";
import orderSlice from "./order-slice";

export let store = configureStore({
	reducer: {
		modalSlice,
		shopSLice,
		couponSlice,
		authSlice,
		wishlistSlice,
		orderSlice,
	},
});

export type DispatchType = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;
