import React, {useContext, useEffect, useState} from "react";
import style from "./itemcard.module.css";
import {displayItemContext} from "../../contextAPI/dispalyItems.jsx";
import itemDetails from "../../Data/itemDetails.js";
import {useNavigate} from "react-router-dom";
import cart from "../../Pages/cart.jsx";
import db from "../../fireBaseConfig.js";
import { doc, updateDoc ,getDoc} from "firebase/firestore";

function ItemCard({item}) {
    const {cartArray, setCartArray,userSignIn} = useContext(displayItemContext);
    const navigate = useNavigate();
    const [showCart,setShowCart] = useState(true);
    const [initialRender, setIntialRender] = useState(false);
    async function updateDatabase(){
        if(initialRender === false) return;
        const userRef = doc(db, 'Users', userSignIn.userId);
        await updateDoc(userRef, {
            cart: cartArray
        });
    }

    async function handleCart(id){
        if(userSignIn.state === false) {
            navigate('/signIn');
            return;
        }
        const docRef = doc(db, "Users", userSignIn.userId);
        const docSnap = await getDoc(docRef);
        const cartA = docSnap.data().cart;

        async function update (){
            await updateDoc(docRef, {
                quantity: docSnap.data().quantity +1
            });
        }
        console.log(cartA);

        cartA.map((data,i)=>{
            if(data.id === String(item.id)){
                console.log("rahul");
                update();
                return;
            }
        })

        // setCartArray([{item},...cartArray]);
        await setCartArray([{ ...item , quantity : 1}, ...cartArray]);
    }
    async function handleRemove(id){
        if(userSignIn.state === false) {
            navigate('/signIn');
            return;
        }
        // const index = cartArray.indexOf(id);
        // cartArray.splice(index,1);
        // console.log(cartArray);
        // await setCartArray(cartArray);
        console.log("remove");
        const updatedCartArray = cartArray.filter(item => item.id !== id);
        console.log(updatedCartArray);
        await setCartArray(updatedCartArray);
    }


    useEffect(() => {
        if(userSignIn.state === false) return;
        async function temp() {
            const docRef = doc(db, "Users", userSignIn.userId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                await setCartArray(docSnap.data().cart);
                await setIntialRender(true);
            } else {
                console.log("No such document!");
            }
        }
        temp();
    }, []);

    useEffect(() => {
        if(userSignIn.state === false) return;
        updateDatabase();
        console.log("updated");
    }, [cartArray]);



    let index = -1;
    // function updateIndex(){
        index = cartArray.findIndex((obj)=> obj.id === item.id);
    // }





    return(
        <>
            <div className={style.itemcard}>
                <span className={style.name}>{item.name}</span>
                <span className={style.price}>{item.price}</span>


                {index === -1 ? (
                    <button className={`${style.btn}  ${style.addToCart}`} onClick={()=>handleCart(item.id)}>Add To Cart</button>
                ):
                (
                    <button className={`${style.btn}  ${style.removeFromCart}`} onClick={()=>handleRemove(item.id)}>Remove From Cart</button>
                )}



            </div>
        </>
    )
}
export  default  ItemCard;