
// const redux = require("redux");

import * as redux from "redux";
import { combineReducers } from "redux";
import {todoReducer} from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";

const result = combineReducers({
    // todo1: todoReducer,
    // notes1: noteReducer
    todoReducer,
    noteReducer
})

export const store = redux.createStore(result);

