import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import TrackSlice from "./TrackSlice";

export const store = configureStore({
  reducer: {
    inputreduser: TrackSlice,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppselector: TypedUseSelectorHook<RootState> = useSelector;
