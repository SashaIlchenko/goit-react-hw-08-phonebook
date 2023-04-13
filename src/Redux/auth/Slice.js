import { createSlice } from "@reduxjs/toolkit";
import { register, login, logOut, fetchCurrentUser } from '../auth/Operations';

export const AuthSlice = createSlice({
    name: 'userValue',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(fetchCurrentUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(fetchCurrentUser.rejected, (state) => {
                state.isRefreshing = false;
            })
    }
})

export const authReducer = AuthSlice.reducer;