import { configureStore } from "@reduxjs/toolkit"; //
import todoReducer from './../features/todo/todoSlice'; //reducer ki knowledge di store
 

export const store = configureStore({
    reducer: todoReducer //key value daldo
})