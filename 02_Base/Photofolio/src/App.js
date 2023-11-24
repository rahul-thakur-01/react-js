//class components
import React, {useState} from "react";
import appStyle from "./app.module.css"
import App2 from "./Components/App2";


const  App = () => {
    const [homeScreen,setHomeScreen] = useState(1);
    function backButtonAction (albumId){
        console.log(albumId);
        if(homeScreen === 1) setHomeScreen(0);
        else setHomeScreen(1);
    }

    return(
        <>
            <App2/>
        </>
    )

}
export default App;