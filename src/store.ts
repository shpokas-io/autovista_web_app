import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import carsReducer from "./store/slices/carsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cars: carsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
