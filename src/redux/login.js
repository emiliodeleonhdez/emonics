import { createSlice } from '@reduxjs/toolkit' // In here createSlice is imported from redux toolkit

//the initialState is being initialized with the count in 0
const initialState = {
  value: "logged out",
}

//Comparing "standard" redux with redux toolkit in toolkit everything is declared in one place
//
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    userlogin: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = "login"
    },
    userlogout: (state) => {
        state.value = "logout"
    }
  },
})

// Action creators are generated for each case reducer function
export const { userlogin, userlogout } = loginSlice.actions

export default loginSlice.reducer