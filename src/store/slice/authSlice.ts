import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: {},
  },
  reducers: {
    loadedUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { loadedUser } = authSlice.actions;
export default authSlice.reducer;
