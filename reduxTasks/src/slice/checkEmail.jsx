import { createSlice } from "@reduxjs/toolkit";

const checkEmail = createSlice({
  name: "checkEmail",
  initialState: { input: "", result: false },
  reducers: {
    check: function (state) {
      return /^\w+@\w+.[a-z]{2,}$/gm.test(state.input)
        ? { ...state, result: true }
        : { ...state, result: false };
    },
    fill: function (state, params) {
      return { ...state, input: params.payload };
    },
  },
});

export const { check, fill } = checkEmail.actions;
export default checkEmail.reducer;
