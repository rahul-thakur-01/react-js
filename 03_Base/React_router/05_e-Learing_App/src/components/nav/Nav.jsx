import React from "react";
import style from "./Nav.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import {Link} from "react-router-dom";


function Nav() {
  const navigate = useNavigation();
  
  return (
    <>
    <nav>
      <div className={style.nav_container}>
        <div className={style.nav_title_wrapper}>
          <Link to = "/">
            <img
              className={style.logo}
              src="https://files.codingninjas.in/pl-ninja-16706.svg"
              alt="logo"
            />
          </Link>
          <h4>Coding Ninjas</h4>
        </div>
        <div className={style.nav_details}>
          <button>
            <NavLink to = "/courses">
              {({isActive }) => (isActive ? "On Courses": "Go To Courses ")}
            </NavLink>
          </button>
          {/* <button onClick={(e)=> {navigate('/courses')}}>Courses</button> */}
        </div>
      </div>
    </nav>
    <Outlet/>
    </>
  );
}

export default Nav;

//  <img
//    alt='cart-icon'
//    src='https://cdn-icons-png.flaticon.com/512/4903/4903482.png'
//    className={`${style.cart_icon} ${style.icon} `}
//  />;
