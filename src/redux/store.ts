import { configureStore } from "@reduxjs/toolkit"
import cardReducer, { photoSlice } from "../modules/card/redux/cardReducer"
import { useDispatch } from 'react-redux'
export const store = configureStore({
    reducer: {
      photo: photoSlice.reducer,
    },
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
