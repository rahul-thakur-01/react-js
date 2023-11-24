import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {createBrowserRouter, Router, RouterProvider} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar.jsx";
import SignIn from "./Pages/signIn.jsx";
import SignUp from "./Pages/signUp.jsx";
import {DisplayContext} from "./contextAPI/dispalyItems.jsx";
import Cart from "./Pages/cart.jsx";

const router = createBrowserRouter([
    {
        path: '/' ,
        element: <DisplayContext><NavBar/></DisplayContext> ,
        children: [
            {path: 'home', element: <App/>},
            {path: 'signIn' , element : <SignIn/>},
            {path: 'signUp' , element: <SignUp/>},
            {path: 'cart', element : <Cart/>}
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
