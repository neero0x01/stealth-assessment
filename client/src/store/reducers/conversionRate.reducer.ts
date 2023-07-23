import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IConversionRate {
    data: any,
    loading: boolean,
    error: any
}
export const getConversionRate = createAsyncThunk(
    'getConversionRateSlice/getConversionRate',
    async (thunkAPI) => {
        let options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: `
            query{
                getSalesConversionRate {
                     conversionRate
                }
            }`})
        }
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/graphql`, options);
        const text = await response.json();
        return text.data.getSalesConversionRate.conversionRate;
    }
)

const initialState: IConversionRate = {
    data: [],
    loading: false,
    error: null
}

const salesByCategorySlice = createSlice({
    name: 'conversionRate',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getConversionRate.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export default salesByCategorySlice.reducer