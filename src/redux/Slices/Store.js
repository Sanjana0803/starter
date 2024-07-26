import { configureStore } from "@reduxjs/toolkit";
// import { CartSlice } from "./Slices/CartSlice";
import { CartSlice } from "./CartSlice"; 
export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
    }
});