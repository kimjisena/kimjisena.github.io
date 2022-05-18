import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');

export const initialState = {count: 0};

export const countSelector = (state) => state.count;

export const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state, action) => {state.count++})
        .addCase(decrement, (state, action) => {state.count--})
});