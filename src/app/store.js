import { configureStore } from "@reduxjs/toolkit";
import { counterReducer, initialState } from "../learn/reducers";

export default configureStore({
    reducer: counterReducer,
    //middleware:[],
    //devTools: {},
    preloadedState: initialState,
    //enhancers: [],
    });