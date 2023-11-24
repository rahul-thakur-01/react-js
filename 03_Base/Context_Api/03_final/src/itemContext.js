import { createContext ,useState,useContext} from "react";
import CartModal from "./components/CartModal";

const itemContext = createContext();

function useValue(){
    const value = useContext(itemContext);
    return value;
}

function CustomItemContext({children}){
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [showCart,setShowCart] = useState(false);
    const [cart,setCart] = useState([]);

    const handleAdd = (prod) => {  //prod is an object 
        const index = cart.findIndex((item) => item.id === prod.id);
        if(index === -1) {
            setCart([...cart,{...prod,qty:1}]);
            setTotal(total+prod.price);
        }else{
            ++cart[index].qty;
            setTotal(total+cart[index].price);
        } 
        setItem(item+1);
    };
    
    const handleRemove = (id) => {
        const index = cart.findIndex((item) => item.id === id);
        if(index !== -1){
            cart[index].qty--;
            setItem(item-1);
            setTotal(total-cart[index].price);
            if(cart[index].qty === 0) { 
                cart.splice(index,1);
            }
        }
        setCart(cart);
    };

    const handleReset = () => {
        setItem(0);
        setTotal(0);
    }

    const toggle = () => {
        setShowCart(!showCart);
    }
    const clear = () => {
        setTotal(0);
        setItem(0);
        setCart([]);
    }
 
    return(
        <itemContext.Provider value={{total,item,setItem,handleRemove,handleAdd,handleReset,toggle,cart,clear}}>
            {showCart && <CartModal/>}
             {children}
        </itemContext.Provider>
    )    
}


export {itemContext,useValue};
export default CustomItemContext; 