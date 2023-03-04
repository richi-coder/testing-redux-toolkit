import { createSlice } from "@reduxjs/toolkit";

const optionSlicer = createSlice({
    name: "filter",
    initialState: "ALL",
    reducers: {
        filterChange(state, action) {
            return action.payload
        }
    }
})

export const { filterChange } = optionSlicer.actions
export default optionSlicer.reducer
