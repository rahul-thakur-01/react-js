import React, {useRef} from "react";
import style from "./signUp.module.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import db from "../fireBaseConfig.js";
import { useNavigate } from "react-router-dom";
function  SignUp(){
    const navigate = useNavigate();
    const nameRef =useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const emailRef  = useRef();
    async function eventHanlderSignUp(){
        if(passwordRef.current.value !== confirmPasswordRef.current.value) {
            console.log("Password didn't match");
            return;
        }
        const docRef = await addDoc(collection(db, "Users"), {
            name: nameRef.current.value,
            email : emailRef.current.value,
            password : passwordRef.current.value,
            orders: [],
            lastSignStatus : false,
            cart: []
        });
        navigate('/signIn');
    }
     return(
         <>
             <div className={style.signUp}>
                 <input type="text" placeholder="Enter Your Name: " ref={nameRef} required/>
                 <input type="text" placeholder="Enter Your EmailId: " ref={emailRef} required/>
                 <input type="text" placeholder="Enter Your Password: " ref={passwordRef} required/>
                 <input type="text" placeholder="Enter Your Confirm Password: " ref={confirmPasswordRef} required/>

                 <button type="submit" onClick= {eventHanlderSignUp}>SignUp</button>
             </div>
         </>
     )
 }
 export default SignUp;
