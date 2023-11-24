import React, {useRef, useState} from "react";
import style from "./albumicon.module.css";
import albumIcon from "../../src/album.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
const AlbumIcon = (props) => {
    let {editAlbum,deleteAlbum,albumName,albumId,editModeIndex,editModeShow,index,currentAlbumOpen,setCurrentAlbumOpen} = props;
    const editInputRef = useRef();
    const [newName,setNewName] = useState(albumName);


    async function  helper(albumId){
        await editModeShow(albumId);
        editInputRef.current.value = albumName;
        editInputRef.current.focus();
    }
    async function toSetCurrentAlbumOpen(){
        await setCurrentAlbumOpen(albumId);
        props.backButtonAction(albumId)
    }

    return(
        <>
            <div className={style.outer} >
                <div className={style.inner} onClick={toSetCurrentAlbumOpen}>
                    <img src={albumIcon} alt="" className={style.albumImg}/>
                </div>

                {editModeIndex !== index ?
                    <>
                        <span className={style.albumName}> {albumName} </span>
                        <FontAwesomeIcon onClick={()=> helper(albumId) } icon={icon({name: 'pen-to-square'})} className= {` ${style.editIcon}` } />
                        <FontAwesomeIcon onClick={()=>deleteAlbum(albumId)} icon={icon({name: 'trash'})} className= {` ${style.deleteIcon}`}/>
                    </>
                    :
                    <>
                        <input type="text" className={style.editAlbumInput} ref={editInputRef} onChange={(e) => setNewName(e.target.value)}/>
                        <FontAwesomeIcon onClick={()=>editAlbum(albumId,newName)  } icon={icon({name: 'check'})} className= {` ${style.checkIcon}` } />
                    </>
                }
            </div>
        </>
    )
}
export default AlbumIcon;








{/*<FontAwesomeIcon icon={icon({name: 'pen-to-square'})} className= {`fa-bounce ${style.editIcon}` } />*/}
{/*<FontAwesomeIcon icon={icon({name: 'trash'})} className= {`fa-bounce ${style.deleteIcon}`}/>*/}