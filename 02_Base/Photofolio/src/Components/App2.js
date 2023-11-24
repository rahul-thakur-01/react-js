//class components
import React, {useState} from "react";
import Nav from "./Nav";
import Nav2 from "./Nav2";
import AlbumList from "./AlbumList";

import db from "../fireStore";
import { collection, addDoc ,doc,getDoc,onSnapshot} from "firebase/firestore";

const  App2 = () => {
    const [imageAddressArray,setImageAddressArray] = useState([]);
    const [homeScreen,setHomeScreen] = useState(1);
    const [currentAlbumOpen,setCurrentAlbumOpen] = useState(0);
    async  function backButtonAction (albumId){
        console.log("rahul");
        console.log(albumId);
        // console.log(albumId);
        // console.log(albumId);
        // const docRef = doc(db, "Albums", albumId);
        // //
        // try {
        //     const doc = await getDoc(docRef);
        //     const data = doc.data();
        //     // console.log(data.name);
        //     // console.log(data.imageAddressArray);
        //     // data.imageAddressArray.push()
        //     // console.log(data);
        //     setImageAddressArray(data.imageAddressArray);
        // } catch (error) {
        //     console.log(error);
        // }

        if(albumId != -1) {
            const docRef = doc(db, "Albums", albumId);

            // Listen for changes to the album document.
            onSnapshot(docRef, async (doc) => {
                // Get the data from the album document.
                const data = doc.data();

                // Update the image address array with the data from the album document.
                setImageAddressArray(data.imageAddressArray);
            });
        }

        if(homeScreen === 1) setHomeScreen(0);
        else setHomeScreen(1);
    }

    return(
        <>
            <Nav/>
            {homeScreen === 1 ?
                <AlbumList backButtonAction = {backButtonAction} currentAlbumOpen={currentAlbumOpen} setCurrentAlbumOpen = {setCurrentAlbumOpen}/>:
                <>
                    <Nav2 backButtonAction = {backButtonAction} imageAddressArray = {imageAddressArray} currentAlbumOpen = {currentAlbumOpen}/>
                </>
            }
        </>
    )

}
export default App2;