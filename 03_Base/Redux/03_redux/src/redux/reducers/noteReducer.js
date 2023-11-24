import {ADD_NOTE, DELETE_NOTE} from "../actions/noteActions"


const intialState = {
    notes: [
        {text:"hello 1st notes",createdOn: new Date()},
        {text:"hello 2nd notes",createdOn: new Date()}
    ]
};


export function noteReducer(state = intialState,action){
    switch(action.type){
        case ADD_NOTE: {
            return{
                ...state,
                notes:[
                    ...state.notes,
                    {
                        text: action.text,
                        createdOn : new Date(),
                    }
                ]
                
            }
        }
        case DELETE_NOTE:{
            const newNotes = state.notes.filter((note, index) => index !== action.index);
            return {
                ...state,
                notes: newNotes,
            };

            // WRONG CODE 
            // state.notes.splice(action.index,1);
            // return{
            //     ...state,
            //     notes: [...state.note]
            // }

            // CORRECTED CODE 
            // const newNotes = [...state.notes];
            // newNotes.splice(action.index, 1);
            // return {
            //     ...state,
            //     notes: newNotes,
            // };
        }
        default:
            return state;
    }
}
// NOTE: Redux state should always be treated as immutable, and you should return a new state 
//       object instead of modifying the existing one. 

