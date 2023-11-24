import React, { createContext, useContext, useEffect, useState } from "react";
import itemDetails from "../Data/itemDetails.js";
import { collection, getDocs, query } from "firebase/firestore";
import db from "../fireBaseConfig.js";
import { useNavigate } from "react-router-dom";


const displayItemContext = createContext();

function DisplayContext({ children }) {
    const [itemArray, setItemArray] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    const [userSignIn, setUserSignIn] = useState({ state: false, userId: null });
    const [cartArray, setCartArray] = useState([]);


    useEffect(() => {
        setItemArray(itemDetails);
    }, []);

    return (
        <displayItemContext.Provider
            value={{

                cartArray,
                setCartArray,
                userSignIn,
                setUserSignIn,
                itemArray,
                setItemArray,
                searchItem,
                setSearchItem,
            }}
        >
            {children}
        </displayItemContext.Provider>
    );
}

export { displayItemContext, DisplayContext };
