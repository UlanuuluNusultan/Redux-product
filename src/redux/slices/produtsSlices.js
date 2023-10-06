import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk('products/getProducts',
    async () => {
        const { data } = await axios("https://api.escuelajs.co/api/v1/products");
        console.log(data);
        return data
    }
)
const productsSlices = createSlice({
    name: 'products',
    initialState: {
        productsData: [],
        loading: false,
        err: "",
    },
    reducers: {},
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.loading = true
        },
        [getProducts.fulfilled]: (state, action) => {
            state.loading = false
            state.productsData =action.payload
        },
        [getProducts.rejected]: (state, { payload }) => {
            state.loading = false
            state.err = payload
        },
    },
});
export default productsSlices.reducer