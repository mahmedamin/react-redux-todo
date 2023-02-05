import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "../state/reducers";
import thunk from "redux-thunk";

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: {},
    middleware: [thunk]
});

export default store;
