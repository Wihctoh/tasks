import { createSlice } from "@reduxjs/toolkit";

const showText = createSlice({
  name: "showText",
  initialState: false,
  reducers: {
    showHide: function (state) {
      return !state;
    },
  },
});

export const { showHide } = showText.actions;
export default showText.reducer;
