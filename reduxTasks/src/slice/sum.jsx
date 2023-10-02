import { createSlice } from "@reduxjs/toolkit";

const sum = createSlice({
  name: "sum",
  initialState: { inp1: 0, inp2: 0, result: 0 },
  reducers: {
    fill1: function (state, params) {
      return { ...state, inp1: params.payload };
    },
    fill2: function (state, params) {
      return { ...state, inp2: params.payload };
    },
    summ: function (state) {
      return { ...state, result: +state.inp1 + +state.inp2 };
    },
  },
});

export const { fill1, fill2, summ } = sum.actions;
export default sum.reducer;
