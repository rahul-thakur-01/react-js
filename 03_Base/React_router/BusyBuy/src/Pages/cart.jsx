import React, {useContext, useEffect, useState} from "react";
import {displayItemContext} from "../contextAPI/dispalyItems.jsx";

import style from "./cart.module.css";

function Cart(){
    const [total,setTotal] = useState(0);
    const [quantity,setQuantity] = useState(0);
    const {cartArray} = useContext(displayItemContext);
    function totalValue(){
        let total = 0;
        let quantity = 0;
        cartArray.forEach((data)=> {
            total += data.price;
            quantity += data.quantity;
        })
        return {total,quantity};
    }
    
    useEffect(()=>{
        let obj = totalValue();
        setTotal(obj.total);
        setQuantity(obj.quantity);
    },[cartArray])
    
    return(
        <>

            <div className={style.cart}>

                <h1 className={style.heading}>Cart</h1>

                <div className={style.tableInfo} style={{border:"1px solid blue"}}>
                    <p className={ ` ${style.common1}`}>Item</p>
                    <p className={` ${style.common1}`}>Quantity</p>
                    <p className={` ${style.common1}`}>Price</p>
                </div>

                {cartArray.map((item,i) => {
                    return(
                        <div className={style.cartItem} key={i}>
                             <p className={ `${style.itemName} ${style.common2}`}>{item.name}</p>
                             <p className={`${style.quantity} ${style.common2}`}>*{item.quantity}</p>
                             <p className={`${style.itemPrice} ${style.common2}`}>{item.price}</p>
                         </div>
                    )
                })}
           

                <div className={style.tableInfo}>
                        <p className={ ` ${style.common1}`}>Total</p>
                        <p className={` ${style.common1}`}>*{quantity}</p>
                        <p className={` ${style.common1}`}>{total}</p>
                </div>
                
            </div>
        </>
    )
}
export  default Cart;