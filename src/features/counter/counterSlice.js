import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter : {
        basic: 0,
        smart: 0,
        dangerous: 0
    },
    counterType: 'basic'
};


const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        counting: (state, amount) => {
            state.counter[state.counterType] = state.counter[state.counterType]+ amount.payload
        },
        reset: (state) => {
            state.counter = {
                basic: 0,
                smart: 0,
                dangerous: 0
            }
        },
        selectCounter: (state, value) => {
            state.counterType = value.payload;
        }
    }
    
});


export const {counting, reset, selectCounter} = counterSlice.actions;

export default counterSlice.reducer;