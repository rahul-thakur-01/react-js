import React, {useContext, useEffect, useRef} from "react";
import style from "./signIn.module.css";
import db from "../fireBaseConfig.js";
import {displayItemContext} from "../contextAPI/dispalyItems.jsx";
import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import {useNavigate} from "react-router-dom";
import ItemList from "../Components/ItemList/ItemList.jsx";

function  SignUp(){
    const emailRef = useRef();
    const passwordRef = useRef();
    const {userSignIn , setUserSignIn, setItemArray} = useContext(displayItemContext);
    const navigate = useNavigate();


    async function handleSignIn(){
        const q = query(collection(db, "Users"));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            if (doc.data().email === emailRef.current.value) {
                if (doc.data().password === passwordRef.current.value) {
                    setUserSignIn({state: true, userId: doc.id});
                    navigate('/home');
                    console.log("userfound");
                }
            }
        });
    }
    function navigateSignUp(){
        navigate('/signUp');
    }
    return(
        <>
            <div className={style.signIn}>
                <input type="text" placeholder="Enter Your EmailId: " ref={emailRef}/>
                <input type="text" placeholder="Enter Your Password: " ref={passwordRef}/>
                <button type="submit" onClick={handleSignIn}>SignIn</button>
            
                <div className={style.newAccount} onClick={navigateSignUp}>    Create a New Account</div>
                
            </div>
           
            
        </>
    )
}
export default SignUp;
