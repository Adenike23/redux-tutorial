import { createSlice } from "@reduxjs/toolkit"

const initialAuthSlice = { isAuth: false }

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthSlice,
    reducers: {
        login(state) {
            state.isAuth = true
        },
        logout(state) {
            state.isAuth = false
        }
    }
})

export const authActions = authSlice.actions

export default authSlice.reducer;