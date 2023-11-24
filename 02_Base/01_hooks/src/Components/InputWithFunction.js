import {useState,useEffect} from "react";

export default function Input(){
    
    const [name,setName] = useState("Rahul");
    const [lastName,setLastName] = useState("Kumar"); 

    //acting as component did mount & did update 
    useEffect(() => {
        document.title = name+" "+lastName
    });

    //now it act as component did mount 
    // useEffect(() => {
    //     document.title = name+" "+lastName
    // },[]);

    //now it act as component did update when last name update 
    // useEffect(() => {
    //     document.title = name+" "+lastName
    // },[lastName]);

    useEffect (() => {
        let timer = setInterval(() => {
            console.log("window width" , window.innerWidth);
        },2000);

        //give the unmount call
        return(clearInterval(timer));
    })




    return(
        <>
        <div className="section">
            <Row label="Name">
                    <input value = {name} onChange={(e)=> setName(e.target.value)}className="input"/>
            </Row >
            <Row label="Last Name">
                    <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="input"/>
            </Row >
        </div>

        <h2>Hello, {name + " " + lastName}</h2>
        
        </>
        )
    }


function Row(props){
    const{label} = props;
    return(
        <>
        <lable>{label}<br/></lable>
        {props.children}
        <hr />
        </>
    )
}
