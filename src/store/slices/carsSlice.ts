import { createSlice } from "@reduxjs/toolkit";

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  engine: string;
  transmission: string;
  power: string;
  car_image: string;
}

interface CarsState {
  cars: Car[];
  loading: boolean;
  error: string | null;
}

const initialState: CarsState = {
  cars: [],
  loading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setCars(state, action) {
      state.cars = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setCars, setLoading, setError } = carsSlice.actions;
export default carsSlice.reducer;
