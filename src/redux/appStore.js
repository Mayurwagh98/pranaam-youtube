import { configureStore } from "@reduxjs/toolkit";
import sidebarFlag from "./navbarSlice";
import searchedCache from "./cacheSlice";
import chatReducer from "./chatSlice";

const appStore = configureStore({
  reducer: {
    sidebarFlag: sidebarFlag,
    searchedCache: searchedCache,
    chat: chatReducer,
  },
});

export default appStore;
