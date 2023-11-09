
import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../actions/Index";
import { initialState } from "../state/Index"


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state) => {
            state.user.loading = true;
            state.user.error = null;
        })

        builder.addCase(getUser.fulfilled, (state, action) => {
            state.user.data = null;
            state.user.data = action.payload;
            state.user.loading = false;
        })

        builder.addCase(getUser.rejected, (state) => {
            state.user.data = null;
            state.user.error = "Error retrieving user data";
            state.user.loading = false;
        })
    }
})

export default userSlice.reducer;
export const {} = userSlice.actions;

