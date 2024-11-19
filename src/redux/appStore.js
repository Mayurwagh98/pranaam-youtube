import { configureStore } from "@reduxjs/toolkit";
import sidebarFlag from "./navbarSlice";
import searchedCache from "./cacheSlice";

const appStore = configureStore({
  reducer: {
    sidebarFlag: sidebarFlag,
    searchedCache: searchedCache,
  },
});

export default appStore;
