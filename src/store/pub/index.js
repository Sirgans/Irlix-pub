import { configureStore } from "@reduxjs/toolkit"
import { pubReducer } from "./pubSlice"

export const store = configureStore({
    reducer: {
        pub: pubReducer
    }
})

