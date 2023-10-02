import { configureStore } from "@reduxjs/toolkit";
import increment from "../slice/increment";
import inpValue from "../slice/inpValue";
import inpForm from "../slice/inpForm";
import showText from "../slice/showText";
import checkEmail from "../slice/checkEmail";
import sum from "../slice/sum";

const store = configureStore({
  reducer: {
    increment: increment,
    inpValue: inpValue,
    inpForm: inpForm,
    showText: showText,
    checkEmail: checkEmail,
    sum: sum,
  },
});

export default store;
