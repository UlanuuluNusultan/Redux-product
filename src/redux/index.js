import { configureStore } from "@reduxjs/toolkit";
import produtsSlices from "./slices/produtsSlices";

const store = configureStore({
    reducer:{
        add:produtsSlices,
    }
})
export default store;