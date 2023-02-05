import todos from './todos';
import {combineReducers} from "@reduxjs/toolkit";

const rootReducer = combineReducers({todos});

export default rootReducer;
