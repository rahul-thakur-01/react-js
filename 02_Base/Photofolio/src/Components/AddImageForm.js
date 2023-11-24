import React, {useEffect, useRef} from "react";
import style from "./addImageForm.module.css";
import db from "../fireStore";
import { collection, addDoc ,doc,getDoc,setDoc} from "firebase/firestore";


function AddImageForm(props){
    const imageNameRef = useRef();
    const imageLinkRef = useRef();
    async function add() {
            const imageLink = imageLinkRef.current.value;
            const imageName = imageNameRef.current.value;
            const docId = props.currentAlbumOpen;
            const docRef = doc(db, "Albums", docId);
            const document = await getDoc(docRef);
            const data = document.data();
            data.imageAddressArray.push({imageName: imageName,imageLink: imageLink});
            await setDoc(docRef, data);
            imageNameRef.current.value = "";
            imageLinkRef.current.value = "";
            imageNameRef.current.focus();

    }

    useEffect(() => {
        imageNameRef.current.focus();
    }, []);

    return(
        <>
            <div className={style.form}>
                <div className={style.main}>
                    <span className={style.heading}>Add image to cameraman</span>
                    <div className={style.inputBtn}>
                        <input type="text" ref={imageNameRef} className={style.input} placeholder="Title"/>
                        <input type="text" ref={imageLinkRef} className={style.input} placeholder="Image URL"/>
                        <div className={style.allBtn}>
                            <button  className={ `${style.btn} ${style.clear}` }>Clear</button>
                            <button onClick={add} className={ `${style.btn} ${style.create}` }>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default  AddImageForm;