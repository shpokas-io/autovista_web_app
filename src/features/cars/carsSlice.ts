import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  color?: string;
  engine: string;
  transmission: string;
  drive: string;
  power: number;
  car_image: string;
}

interface CarsState {
  cars: Car[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CarsState = {
  cars: [],
  status: "idle",
  error: null,
};

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  const response = await axios.get("/cars");
  return response.data;
});

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraREducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCars.fullfilled, (state, action) => {
        state.status = "succeeded";
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default carsSlice.reducer;
