import { configureStore } from "@reduxjs/toolkit";
import { ValueReducer } from "./contacts/ValueSlice";
import { FilterReduser } from "./contacts/FilterSlice";



export const store = configureStore({
    reducer: {
        contacts: ValueReducer,
        filter: FilterReduser,
    },
});


