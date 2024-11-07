import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "sidebarFlag",
  initialState: {
    sidebarFlag: true,
  },
  reducers: {
    showSidebar: (state) => {
      state.sidebarFlag = !state.sidebarFlag;
    },
  },
});

export const { showSidebar } = navbarSlice.actions;

export default navbarSlice.reducer;
