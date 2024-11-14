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
    closeSider: (state) => {
      state.sidebarFlag = false;
    },
  },
});

export const { showSidebar,closeSider } = navbarSlice.actions;

export default navbarSlice.reducer;
