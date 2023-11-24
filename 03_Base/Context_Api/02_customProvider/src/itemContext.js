import { createContext ,useState,useContext} from "react";

const itemContext = createContext();

//custom Hooks always start with use keyword
function useValue(){
    const value = useContext(itemContext);
    return value;
}

// for custom provider 
function CustomItemContext({children}){
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);

    const handleAdd = (price) => {
        setTotal(total+price);
        setItem(item+1);
     };
   
     const handleRemove = (price) => {
       if(total <= 0) return;
       if(item <= 0) return;
       setTotal((prevState)=> prevState-price);
       setItem(item-1);
     };

    // console.log(props);  -> props has children in children is there it's children like h1 nav items
    return(
        <itemContext.Provider value={{setItem,handleRemove,handleAdd}}>
            {children}
        </itemContext.Provider>
    )
}


export {itemContext,useValue};
export default CustomItemContext; 