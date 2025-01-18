import {configureStore} from "@reduxjs/toolkit";
import modalSlice from "./modal-slice";
import shopSLice from "./shop-slice";
import couponSlice from "./coupon-slice";

export let store = configureStore({
	reducer: {modalSlice, shopSLice, couponSlice},
});

export type DispatchType = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;
