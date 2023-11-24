const redux = require("redux");

//Action 
const ADD_TODO  = "Add TODO";
const TOGGLE_TODO = "Toggle TODO";

// for add action we are passing text simply payload
// for toogle we are passing index 

//action objects & action creators

const addToDo = (text) => (
    {text,type:ADD_TODO}
)

const toggleToDo = (index) => (
    {index,type:TOGGLE_TODO}
)

//Intial state 
const intialState = {
    todos: []
}



//reducers are pure function  action => set of objects of action we provided upper 
function todoReducer(state = intialState,action){
    switch(action.type){
        case ADD_TODO:
            return{
                ...state,       //existed state
                todos:[         //updated state 
                    ...state.todos,
                    {
                        text:action.text,
                        completed: false,
                    }
                ]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo,i) => {
                    if( i === action.index) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }
        default:
            return state;
    }
}

//reducer return the state after modification  
//creating the store we have to use redux library 
//createStore is not in used becuase redux developer want you to user redux toolkit is library of raw redux 
// redux toolkit is simlified way to create 

const store = redux.createStore(todoReducer);
//    dispatch  action 
store.dispatch(addToDo("1st todo")); 
store.dispatch(addToDo("2nd todo"));
store.dispatch(toggleToDo(0));
   

//readt data from store
console.log(store.getState());