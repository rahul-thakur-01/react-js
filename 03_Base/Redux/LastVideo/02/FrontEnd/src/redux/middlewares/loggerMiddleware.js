export const loggerMiddleware = (store) => {
    return function(next){
        return function(action){
            console.log("[LOG]: "+action.type+" " + new Date().toString());
            next(action);
            console.log(store.getState()); // must called after next 
        }
    }
}

export const loggerMiddleware2 = (store) => {
    return (next) => {
        return (action) => {
            console.log("Another Way to declare Middleware");
            next(action);
        }
    }
}