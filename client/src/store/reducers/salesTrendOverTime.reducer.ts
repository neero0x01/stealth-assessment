import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ISalesTrendOverTime {
    data: any,
    loading: boolean,
    error: any
}
export const getSalesTrendOverTimeData = createAsyncThunk(
    'SalesTrendOverTimeSlice/getSalesTrendOverTime',
    async (thunkAPI): Promise<any> => {
        let options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: `
            query{
                getSalesTrendOverTime {
                month
                day
                year
              }
            }`})
        }
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/graphql`, options);
        const text = await response.json();
        return text.data.getSalesTrendOverTime
    }
)

const initialState: ISalesTrendOverTime = {
    data: [],
    loading: false,
    error: null
}

const SalesTrendOverTimeSlice = createSlice({
    name: 'salesTrendOverTime',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getSalesTrendOverTimeData.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getSalesTrendOverTimeData.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
        })
        builder.addCase(getSalesTrendOverTimeData.rejected, (state, action) => {
            state.error = action.error
            state.loading = false
        })
    }
})

export default SalesTrendOverTimeSlice.reducer