import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./store/slices/authSlice";
import carsReducer from "./store/slices/carsSlice";
import { baseApi } from "./store/api/baseApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cars: carsReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
