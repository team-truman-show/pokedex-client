// src/redux/store/configureStore.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import thunk from "redux-thunk";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [thunk],
});
