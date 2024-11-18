/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
interface AuthState {
  isAuthenticated: boolean;
  user: null | { username: string };
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

const loginApi = async (credentials: {
  username: string;
  password: string;
}) => {
  const response = await axios.post("/auth/login", credentials);
  return response.data;
};

const registerApi = async (credentials: {
  username: string;
  password: string;
}) => {
  const response = await axios.post("/auth/register", credentials);
  return response.data;
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    credentials: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      return await loginApi(credentials);
    } catch (error: any) {
      if (error.response?.status === 401) {
        return rejectWithValue("Invalid credentials. Please try again.");
      }
      return rejectWithValue("Something went wrong. Please try again later.");
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (
    credentials: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      return await registerApi(credentials);
    } catch (error: any) {
      if (error.response?.status === 500) {
        return rejectWithValue("Username already exists. Try a different one.");
      }
      return rejectWithValue("Something went wrong. Please try again later.");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.loading = false;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.loading = false;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
