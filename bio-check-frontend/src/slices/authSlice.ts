import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from '../services/authService'

const userString = localStorage.getItem("user");

const user = userString ? JSON.parse(userString) : null;

const initialState = {
  user: user ? user : null,
  error: false,
  success: false,
  loading: false,
};
  
  export const register = createAsyncThunk<any, any, { rejectValue: string }>
  (
    "auth/register",
    async (user, thunkAPI) => {
      const data: any = await authService.register(user);
  
      if (data.errors) {
        return thunkAPI.rejectWithValue(data.errors[0]);
      }
  
      return data;
    }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const login = createAsyncThunk<any, any>("auth/login", async (user, thunkAPI) => {
  const data = await authService.login(user);

  if (data.errors) {
    return thunkAPI.rejectWithValue(data.errors[0]);
  }

  return data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state: any) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state: any, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state: any) => {
        state.user = null;
        state.loading = false;
        state.success = true;
        state.error = null;
      })
     .addCase(login.pending, (state: any) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state: any, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;