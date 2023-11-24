import React, {useContext} from "react";
import style from "./navbar.module.css";
import {displayItemContext} from "../../contextAPI/dispalyItems.jsx";
import {Outlet} from "react-router-dom";
import {NavLink,Link} from "react-router-dom";

function NavBar () {
    const {userSignIn, setUserSignIn,setCartArray,} = useContext(displayItemContext);
    function eventLogOut (){
        setUserSignIn({state:false,userId:null});
        setCartArray([]);
    }
    return(
        <>
            <div className={style.navbar}>

                <div className={style.leftPart}>
                    <NavLink to={'home'}>
                        <p className={style.appHeading}>BusyBuy</p>
                    </NavLink>
                </div>

                <div className={style.rightPart}>
                    {userSignIn.state ? (
                        <>
                            <NavLink to={'home'}> <span>Home</span></NavLink>
                            <span><NavLink to={'orders'} className={style.navlinks}> Orders</NavLink></span>
                            <span><NavLink to={'cart'} className={style.navlinks}> Cart </NavLink></span>
                            <span><NavLink to={'home'} className={style.navlinks} onClick={eventLogOut}>LogOut </NavLink></span>
                        </>
                    ) :
                    (
                        <>
                            <span><NavLink to={'home'} className={style.navlinks}> Home</NavLink></span>
                            <span><NavLink to={'signIn'} className={style.navlinks}> SignIn</NavLink></span>
                            <span><NavLink to={'signUp'} className={style.navlinks}> SignUp</NavLink></span>
                        </>

                    )}
                </div>


            </div>
            <Outlet/>
        </>
    )
}
export default NavBar;