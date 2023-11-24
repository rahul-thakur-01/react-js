import React, {useContext, useEffect, useRef, useState} from "react";
import style from "./filterbox.module.css";
import itemDetails from "../../Data/itemDetails.js";
import {displayItemContext} from "../../contextAPI/dispalyItems.jsx";

function FilterBox() {
    const [checkedArray, setCheckedArray] = useState([]);
    const rangeRef = useRef();

    const {setItemArray} = useContext(displayItemContext);
    function rangeEventHandler(){
        const price = rangeRef.current.value;
        const newArray = itemDetails.filter((item) => item.price <= price);
        setItemArray(newArray);
    }
    function checkBoxEventHandler(check,companyName){
        const cn = companyName.toLowerCase();
        const index = checkedArray.indexOf(cn);
        if(check === false && index !== -1){
            checkedArray.splice(index,1);
        }
        else if(check === true){
            checkedArray.push(cn);
        }
        setCheckedArray(checkedArray);
        if(checkedArray.length === 0){
            setItemArray(itemDetails);
            return;
        }
        // const newArray = [];
        //     itemDetails.map((item) => {
        //         let arrayCom = item.company.toLowerCase();
        //         for(let i=0;i<checkedArray.length;++i){
        //             if(checkedArray[i] === arrayCom){
        //                 newArray.push(item);
        //             }
        //         }
        //     })
        //
        // setItemArray(newArray);
        const filterItem = itemDetails.filter((item) => checkedArray.includes(item.company.toLowerCase()));
        setItemArray(filterItem);
    }
    return(
        <>
            <div className={style.filterbox}>
                <h3>Filter</h3>
                <div className={style.rangeInput}>
                    <span className={style.priceRange}>99 - {rangeRef.current === undefined? "50" : rangeRef.current.value}</span>
                    <input type="range" min="99" max="2500"  onChange={rangeEventHandler} ref={rangeRef} />
                </div>

                <h3>Category</h3>
                <span className={style.checkBox}>
                    <span><input type="checkbox" onChange={(e)=>checkBoxEventHandler(e.target.checked,"Apple")}/>Apple</span>
                    <span><input type="checkbox" onChange={(e)=>checkBoxEventHandler(e.target.checked,"Samsung")}/>Samsung</span>
                    <span><input type="checkbox" onChange={(e)=>checkBoxEventHandler(e.target.checked,"Microsoft")}/>Microsoft</span>
                    <span><input type="checkbox" onChange={(e)=>checkBoxEventHandler(e.target.checked,"Google")}/>Google</span>
                </span>


            </div>
        </>
    )
}
export default FilterBox;
