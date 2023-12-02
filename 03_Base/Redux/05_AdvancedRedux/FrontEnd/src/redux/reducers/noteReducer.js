
// import {ADD_NOTE, DELETE_NOTE} from "../actions/noteActions";

import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState={
    notes:[]
};

export const getInitialStateAsync = createAsyncThunk(
    'note/getIntialState',
    ()=>{
        return axios.get("http://localhost:4100/api/notes");
    }
)

export const addNoteAsync = createAsyncThunk(
    "note/addNote", async(payload)=>{
        try{
            const response = await fetch("http://localhost:4100/api/notes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    text: payload,
                    createdOn: new Date().toDateString()
                })
            });
            const data = await response.json();
            console.log("Response.json",data);
            return data;
        }catch(error){
            console.error("Error adding note: ",error);
            throw error;
        }
    }
);

export const deleteNoteAsync = createAsyncThunk(
    "note/deleteNote", async (payload)=> {
        try{
            const response = await fetch("http://localhost:4100/api/notes/deleteNote", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    index: payload
                }),
            });
            const data = await response.json(); // Await the JSON parsing
            console.log("Response.json", data); // Log the parsed data
            return data;
        } 
        catch (error) {
            console.error("Error adding todo:", error);
            throw error;
        }
    }
)


const noteSlice = createSlice({
    name: 'note',
    initialState: initialState,
    reducers:{
        add : (state,action) => {
            state.notes.push({
                text: action.payload,
                createdOn: new Date().toDateString()
            })
        },
        delete : (state,action) => {
            state.notes.splice(action.payload,1);
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getInitialStateAsync.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.notes= [...action.payload.data];
        })
        .addCase(addNoteAsync.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.notes.push(action.payload);
        })
        .addCase(deleteNoteAsync.fulfilled,(state,action)=> {
            console.log("returned value from async delte : ",action.payload);
            state.notes.splice(action.payload,1);
        })
    }
})

export const noteReducer = noteSlice.reducer;
export const actions = noteSlice.actions;

// Selectors 
export const noteSelector = (state) => state.noteReducer.notes;



