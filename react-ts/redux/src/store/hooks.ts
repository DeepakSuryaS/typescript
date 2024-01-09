import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";

type DispatchFuncType = () => AppDispatch;

export const useCartDispatch: DispatchFuncType = useDispatch;
