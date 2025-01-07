import type {DispatchType, RootStore} from "../../redux/store";
import {useSelector, useDispatch} from "react-redux";
import type {TypedUseSelectorHook} from "react-redux";

export let useReduxSelector: TypedUseSelectorHook<RootStore> = useSelector;
export let useReduxDispatch = () => useDispatch<DispatchType>();
