import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import {configureStore} from "@reduxjs/toolkit"

export const store = configureStore({
    reducer:{
        cart:cartSlice,
        product:productSlice
    }
})