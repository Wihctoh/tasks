import { configureStore } from "@reduxjs/toolkit";
import increment from "../slice/increment";
import inpValue from "../slice/inpValue";

const store = configureStore({
  reducer: { increment: increment, inpValue: inpValue },
});

export default store;
