import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { IUser } from "@/types";

interface UserState {
  user: IUser | null;
  isLoading: boolean;
}

const initialState: UserState = {
  user: null,
  isLoading: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    clearAuth: (state) => {
      state.user = null;
      state.isLoading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, clearAuth, setLoading} = userSlice.actions;
export default userSlice.reducer;
