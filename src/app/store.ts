import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./features/Loader/loaderSlice";

const store = configureStore({
  reducer: {
    loader: loaderReducer,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
