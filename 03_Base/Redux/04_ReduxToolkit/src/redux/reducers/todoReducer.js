// import { createSlice } from "@reduxjs/toolkit";
const {createSlice} = require('@reduxjs/toolkit');

const initialState={
    todos:[
        {text:"Go to Gym at 6", completed: false},
        {text: "Study at 8", completed: true}
    ]
}

//Reducer Using Redux Toolkit no need to create action 

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers:{
        // add action 
        add : (state,action) => {
            state.todos.push({
                text: action.payload,
                completed: false
            })
        },
        toggle:(state,action) => {
            state.todos.map((todo,index) => {
                if(index === action.payload){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
            //action.payload.index will not work 
        }
    }
})
export const todoReducer = todoSlice.reducer;
export const actions = todoSlice.actions;  


//selector 
export const todoSelector = ((state) => state.todoReducer.todos);

//actions are collection of all aciont add toogle 
// export function todoReducer(state=initialState, action){

//     switch(action.type){
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos:[
//                     ...state.todos,
//                     {
//                         text:action.text,
//                         completed: false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             return{
//                 ...state,
//                 todos: state.todos.map((todo, i)=>{
//                     if(i==action.index){
//                         todo.completed=!todo.completed
//                     }
//                     return todo;
//                 })
//             }
//         default:
//             return state;
//     }
// }