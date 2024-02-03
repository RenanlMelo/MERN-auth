import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false,
    error: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //SIGN-IN
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        //SIGN-UP
        signUpStart: (state) => {
            state.loading = true;
        },
        signUpSuccess: (state, action) => {
            const userData = action.payload;
            localStorage.setItem('user', JSON.stringify(userData));
            state.currentUser = userData;
            state.loading = false;
            state.error = false;
        },
        signUpFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        //UPDATE ACCOUNT
        updateUserStart: (state) => {
            state.loading = true;
        },
        updateUserSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        updateUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //DELETE ACCOUNT
        deleteUserStart: (state) => {
            state.loading = true;
        },
        deleteUserSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = false;
        },
        deleteUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //SIGN-OUT
        signOut: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = false;
        },
    },
});

export const { 
    signInStart, 
    signInSuccess, 
    signInFailure, 
    signUpStart, 
    signUpSuccess, 
    signUpFailure, 
    updateUserStart, 
    updateUserSuccess, 
    updateUserFailure ,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure,
    signOut,
} = userSlice.actions;

export default userSlice.reducer;