import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./todoReducer";
const initialState = {
    message : ""
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState : initialState,
    reducers: {
        reset: (state,action) => {
            state.message = "";
        }
    },
    // 1st method for extraReducer less recommended depreceated 
    // extraReducers:{
    //     "todo/add": (state,action) => {
    //         state.message = "TODO is created";
    //     }
    // }
    //2nd method for extraReducer most recommended 
    extraReducers:(builder)=>{
        builder.addCase(actions.add, (state, action) =>{
            state.message = "TODO is created";
        }) 
    },
    //3rd method for extraReducer little less recommended 
    // extraReducers:{
    //     [actions.add] : (state,action) => {state.message = "TODO is created"}
    // }
})

export const notificationReducer = notificationSlice.reducer;
export const resetNofication = notificationSlice.actions.reset;
export const notificationSelector = (state) => state.notificationReducer.message;


//issue if todoReducer will change the action name 
// you didn't get compiler time error you will get error at runtime it's 
// better way to don't hardcode this kind of things 
// BETTER WAY:  there is api builder in redux toolkit help to create 
    // extraReducers without hard coding the name 
//  import the action creators inside the extra reducers 
// builder.addCase is function takes two argument 
// 1. action 
// 2. reducers

