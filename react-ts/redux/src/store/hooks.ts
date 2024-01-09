import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "./store";

type DispatchFuncType = () => AppDispatch;

export const useCartDispatch: DispatchFuncType = useDispatch;
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
