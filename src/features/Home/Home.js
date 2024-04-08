import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeRequest } from "../../api/api";

export const catalougeData = createAsyncThunk(
    'Home/getProducts',
    async()=>{
        const request = await makeRequest("get","api/get_catalogue/")
        const response=await request.data.data
        return response
    }
)


const HomeSlice = createSlice({
    name:"Home",
    initialState: {
      status: 'idle',
      catalaugeList: [],
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(catalougeData.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(catalougeData.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.catalaugeList = action.payload;
        })
        .addCase(catalougeData.rejected, (state) => {
          state.status = 'failed';
        });
    },
})

export default HomeSlice.reducer;