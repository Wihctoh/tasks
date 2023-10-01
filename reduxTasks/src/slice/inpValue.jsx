import { createSlice } from "@reduxjs/toolkit";

const inpValue = createSlice({
  name: "inpValue",
  initialState: "",
  reducers: {
    fill: function (_state, params) {
      return params.payload;
    },
  },
});

export const { fill } = inpValue.actions;
export default inpValue.reducer;
