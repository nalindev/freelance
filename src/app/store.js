import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "../features/Home/Home"

const store= configureStore({
    reducer: {
        Home:HomeSlice
    }
})


export default store