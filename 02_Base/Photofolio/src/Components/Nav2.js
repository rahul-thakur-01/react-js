import React, {useState} from "react";
import style from "./nav2.module.css";
import AddImageForm from "./AddImageForm";
const Nav2 = (props) => {
    const [showImageAddForm,setShowImageAddForm] = useState(0);
    function eventHandler(){
        if(showImageAddForm === 0) setShowImageAddForm(1);
        else setShowImageAddForm(0);
    }
    return(
        <>
            <div className={style.nav2}>
                <button onClick={()=>props.backButtonAction(-1)} className={ `${style.btn} ${style.back}`}>Back</button>
                <h1 className={style.heading}>No images found in the album.</h1>
                {showImageAddForm === 1 ?
                    <>
                        <button onClick={eventHandler} className={ `${style.btn} ${style.cancel}`} >Cancel</button>
                        <AddImageForm currentAlbumOpen = {props.currentAlbumOpen}/>
                    </>
                    :
                    <button  onClick={eventHandler} className={`${style.btn} ${style.create}`}>Add Photos</button>
                }
            </div>
            <div className={style.imageMainBox}>
                {props.imageAddressArray && props.imageAddressArray.length > 0 ? (
                    props.imageAddressArray.map((data, index) => {
                        return (
                            <div key={index}>
                                <img src={data.imageLink} alt="" className={style.addedImg} />
                                <h2 style={{ textAlign: "center" }}>{data.imageName}</h2>
                            </div>
                        );
                    })
                ) : null}
            </div>
        </>
    )
}
export default Nav2;