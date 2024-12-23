import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://project1-backend-six.vercel.app";

// Login User
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData) => {
    const response = await axios.post(`${BASE_URL}/login`, userData);
    return response.data;
  }
);

// Register User
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData) => {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    return response.data;
  }
);

// Logout User
export const logoutUser = createAsyncThunk("user/logoutUser", async (token) => {
  const response = await axios.post(`${BASE_URL}/logout`, { token });
  return response.data;
});

// User Slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Register
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Logout
      .addCase(logoutUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.status = "succeeded";
        state.user = null;
        state.token = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
