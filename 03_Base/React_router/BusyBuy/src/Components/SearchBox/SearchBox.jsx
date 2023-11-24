import React, { useContext, useRef, useEffect, useState } from "react";
import style from "./searchbox.module.css";
import { displayItemContext } from "../../contextAPI/dispalyItems.jsx";
import itemDetails from "../../Data/itemDetails.js";

function SearchBox() {
    const { itemArray,userSignIn ,setItemArray, searchItem, setSearchItem } = useContext(displayItemContext);
    const inputRef = useRef();
    const [distanceFromTop, setDistanceFromTop] = useState(0); // Initialize with 0

    const handleEvent = () => {
        const userInput = inputRef.current.value;
        const filterItem = itemDetails.filter((item) =>
            item.name.toLowerCase().includes(userInput.toLowerCase())
        );
        setSearchItem(userInput);
        setItemArray(filterItem);
    };

    return (
        <>
            <div className={style.searchbox}>
                <input
                    type="text"
                    id="myDiv"
                    value={searchItem}
                    onChange={handleEvent}
                    ref={inputRef}
                    placeholder="please rate well => user & pass : r & r"
                />
            </div>

        </>
    );
}

export default SearchBox;
