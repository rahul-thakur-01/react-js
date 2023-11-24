// import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');

const initialState={
    todos:[
        // {text:"Go to Gym at 6", completed: false},
        // {text: "Study at 8", completed: true}
    ]
}

export const getInitialStateAsync = createAsyncThunk(
    'todo/getIntialState',
    // async(_,thunkAPI)=>{
    // //async calls
    //     try{
    //         const res = await axios.get("http://localhost:4100/api/todos") //after promise returned then only we are calling dispacth 
    //         thunkAPI.dispatch(actions.setIntialState(res.data));
    //     }catch(err){
    //         console.log(err);
    //     }
    // }

    ()=>{
        console.log("rahul");
        return axios.get("http://localhost:4100/api/todos");
    }
    
    //return a promise

    // (args,thunkAPI) => {
    //     axios.get("http://localhost:4100/api/todos").then((res)=>{
    //         thunkAPI.dispatch(actions.setIntialState(res.data))
    //     })
    // }
)


export const addTodoAsync = createAsyncThunk("todo/addTodo", async (payload) => {
    try {
      const response = await fetch("http://localhost:4100/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: payload,
          completed: false,
        }),
      });
      const data = await response.json(); // Await the JSON parsing
      console.log("Response.json", data); // Log the parsed data
      return data;
    } catch (error) {
      console.error("Error adding todo:", error);
      throw error;
    }
  });

//Reducer Using Redux Toolkit no need to create action 

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers:{
        // add action 
        setIntialState:(state,action) => {
            state.todos = [...action.payload];
        },
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
    },
    extraReducers:(builder)=>{
        //action got executed when action got fulfilled   
        builder.addCase(getInitialStateAsync.fulfilled,(state,action)=>{
            console.log("getIntialState is fullfilled");
            console.log(action.payload);
            state.todos = [...action.payload.data]
        })
        .addCase(addTodoAsync.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.todos.push(action.payload);
        })
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