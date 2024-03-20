import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/AuthSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
    reducer: authReducer
});

export type RootType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export default store
