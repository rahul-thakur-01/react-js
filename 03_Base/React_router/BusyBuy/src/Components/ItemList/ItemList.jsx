import React, {useContext} from "react";
import style from "./itemlist.module.css";
import ItemCard from "../ItemCard/ItemCard.jsx";
import {displayItemContext} from "../../contextAPI/dispalyItems.jsx";

function ItemList() {
    const{itemArray} = useContext(displayItemContext);

    return(
        <>
            <div className={style.itemlist}>
                {itemArray.map((data,i) => {
                    return(
                        <ItemCard item = {data}  key={i}/>
                    )
                })}
            </div>
        </>


    )
}
export  default  ItemList;