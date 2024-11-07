import { configureStore } from "@reduxjs/toolkit";
import sidebarFlag from "./navbarSlice";

const appStore = configureStore({
  reducer: {
    sidebarFlag: sidebarFlag,
  },
});

export default appStore;
