import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
  name: "searchedCache",
  initialState: {},
  reducers: {
    storeSearchedResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { storeSearchedResults } = cacheSlice.actions;

export default cacheSlice.reducer;
