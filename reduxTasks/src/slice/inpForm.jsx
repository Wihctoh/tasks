import { createSlice } from "@reduxjs/toolkit";

const inpForm = createSlice({
  name: "inpForm",
  initialState: { input: "", result: false },
  reducers: {
    fillForm: function (state, params) {
      return { ...state, input: params.payload };
    },
    check: function (state) {
      const str = state.input.trim().split("").reverse().join("");
      return { ...state, result: state.input.trim() === str ? true : false };
    },
  },
});

export const { fillForm, check } = inpForm.actions;
export default inpForm.reducer;
