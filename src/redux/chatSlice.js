import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      // removing 1 message every time if messages reach to 20, to
      // avoid bloating the browser or UI
      state.messages.splice(20, 1);
      // shift new message to the 1st place and prev to last
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
