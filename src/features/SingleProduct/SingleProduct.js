import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeRequest } from "../../api/api";

export const getSingleProductData = createAsyncThunk(
    'Home/getProducts',
    async()=>{
        const request = await makeRequest("get","api/get_catalogue/")
        const response=await request.data.data
        return response
    }
)


const SingleProductSlice = createSlice({
    name:"Home",
    initialState: {
      status: 'idle',
      product: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getSingleProductData.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getSingleProductData.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.product = action.payload;
        })
        .addCase(getSingleProductData.rejected, (state) => {
          state.status = 'failed';
        });
    },
})

export default SingleProductSlice.reducer;