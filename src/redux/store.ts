import {configureStore} from "@reduxjs/toolkit";
import modalSlice from "./modal-slice";

export let store = configureStore({
	reducer: {modalSlice},
});

export type DispatchType = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;
