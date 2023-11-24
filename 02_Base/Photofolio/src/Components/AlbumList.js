import React from "react";
import style from "./albumlist.module.css";
import AlbumForm from "./AlbumForm";
import {useState,useEffect} from "react";
import AlbumIcon from "./AlbumIcon";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import db from "../fireStore";
import { collection,doc, query, onSnapshot,deleteDoc ,setDoc} from "firebase/firestore";

const  AlbumList = (props) => {
    const [albumCreateForm,setAlbumFormDisplay] = useState(0);
    const [albumArray, setAlbumArray] = useState([]);
    const [editModeIndex,setEditModeIndex] = useState(-1);

    const notify = () => toast.success("Album Renamed Successfully!");
    const error = () => toast.error("Album already Exist!");

    useEffect(() => {
        const q = query(collection(db, "Albums"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const Albums = [];
            querySnapshot.forEach((doc) => {
                let name = doc.data().name;
                let id = doc.id;
                Albums.push({name: name, id: id});
            });
            setAlbumArray(Albums);
        });
    }, []);



    function eventHandler () {
        if(albumCreateForm === 0) setAlbumFormDisplay(1);
        else setAlbumFormDisplay(0);
    }
    function editModeShow(albumId){
        const index = albumArray.findIndex((obj) => obj.id === albumId);
        if(editModeIndex === -1) setEditModeIndex(index);
    }
    function editAlbum(id,newAlbumName){
        const index = albumArray.findIndex((obj) => obj.name === newAlbumName);
        if(index !== -1) {
            error();
        }
        else{
            async function helper() {
                await setDoc(doc(db, "Albums", id), {
                    name: newAlbumName,
                });
            }
            helper();
            notify();
        }
        editModeShow();
        setEditModeIndex(-1);
    }

    function deleteAlbum(id){
        async  function helper(){
            await deleteDoc(doc(db, "Albums", id));
        }
        helper();
    }

    return(
        <>
            <ToastContainer/>
            <div className={style.main}>
                {albumCreateForm  ? <AlbumForm setAlbumArray={setAlbumArray} albumArray={albumArray}/>: null}
                <div className={style.header}>
                    <span>Your albums</span>
                    {albumCreateForm  ?
                        <button onClick={eventHandler}  className={ `${style.btn} ${style.cancel}`} >Cancel</button> :
                        <button onClick={eventHandler} className={ `${style.btn} ${style.create}`}>create album</button>
                    }

                </div>
                <div className={style.iconDetails}>
                    {albumArray.map((data, index) => {

                            return <AlbumIcon key={index} albumName={data.name} albumId={data.id}
                                              deleteAlbum={deleteAlbum} editAlbum={editAlbum}
                                              editModeIndex={editModeIndex} setEditModeIndex={setEditModeIndex}
                                              editModeShow={editModeShow} index = {index}
                                              backButtonAction = {props.backButtonAction}
                                              currentAlbumOpen={props.currentAlbumOpen} setCurrentAlbumOpen = {props.setCurrentAlbumOpen}
                            />;

                    })}

                </div>
            </div>
        </>
    )
}
export  default  AlbumList;