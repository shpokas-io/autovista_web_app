import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

interface Car {
  transmission: string;
  id: number;
  make: string;
  model: string;
  year: number;
  engine: string;
  gear: string;
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

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  const response = await axios.get("/cars");
  return response.data;
});

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch cars.";
      });
  },
});

export default carsSlice.reducer;
