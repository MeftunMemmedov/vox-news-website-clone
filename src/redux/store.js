import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsSlice";
import authReducer from "./authSlice";

export const store=configureStore({
    reducer:{
        news:newsReducer,
        auth:authReducer
    }
})