import React, {useEffect} from "react";
import style from "./albumform.module.css";
import {useRef} from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import db from "../fireStore";
import { collection, addDoc } from "firebase/firestore";


const AlbumForm = (props) => {
    const inputRef = useRef();
    function  createAlbum(){
        if(inputRef.current.value === "") return;

        const index = props.albumArray.findIndex((obj) => obj.name === inputRef.current.value);

        if(index === -1){
            // const newAlbumArray = props.albumArray.concat([inputRef.current.value]);
            // props.setAlbumArray(newAlbumArray);
            notify();
            async  function addToDb () {
                await addDoc(collection(db, "Albums"), {
                    name: inputRef.current.value,
                    imageAddressArray: [],
                });
            }
            addToDb();

        }else{
            error();
        }
        inputRef.current.focus();
        inputRef.current.value= "";
    }
    function clearInput(){
    inputRef.current.value = "";
    inputRef.current.focus();
    }

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const notify = () => toast.success("Album created Successfully!");
    const error = () => toast.error("Album already Exist!");

    return(
        <>
            <ToastContainer/>
            <div className={style.main}>
                <span className={style.heading}>Create an album</span>
                <div className={style.inputBtn}>
                    <input type="text" ref={inputRef} className={style.input} placeholder="Add Your Album"/>
                    <div>
                        <button onClick={clearInput} className={ `${style.btn} ${style.clear}` }>Clear</button>
                        <button onClick={createAlbum}  className={ `${style.btn} ${style.create}` }>Create</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export  default  AlbumForm;

