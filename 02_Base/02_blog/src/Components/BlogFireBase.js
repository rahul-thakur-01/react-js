import {useState,useEffect,useRef,useReducer} from "react";

import {db} from "../firebaseInit";

import { collection, addDoc ,doc , query,setDoc, getDocs, onSnapshot, deleteDoc} from "firebase/firestore"; 


function blogsReducer(state,action){

    switch(action.type){
        case "Add": 
            return [action.blog,...state];
        case "Remove":
            return state.filter((blog,index) => index !== action.index);
        case "Set":
            return action.blogs;
        default: 
            return []; 
    }
    
}

export default function Blog(){

    const [formData,setFormData] = useState({title: "",content: ""});
    // const [blogs,setBlogs] = useState([]);
    const [blogs,dispatch] = useReducer(blogsReducer,[]);
    const titleRef = useRef(null);
    
    useEffect(()=>{
        titleRef.current.focus();
    },[])

    useEffect(() => {
        if(blogs.length === 0 || (blogs.length > 0 && blogs[0].title === "")) document.title = "No Blog";
        else document.title = blogs[0].title;
    },[blogs]);

    useEffect(() => {
        

        //But it is not real time this will also work fine with useEffect -> mounted + updated (means without []);
        // async function fetchData(){
        //     const querySnapshot = await getDocs(collection(db, "GarbageDemo"));
            
        //     const blogs = querySnapshot.docs.map((doc) => {
        //         return {
        //             id: doc.id,
        //             ...doc.data()  
        //         }
        //     });
        //     dispatch({ type: "Set", blogs: blogs });
        // }
        // fetchData();


        

        const q = query(collection(db, "GarbageDemo"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const blogs = [];
        querySnapshot.forEach((doc) => {
            blogs.push({...doc.data() , id:doc.id });
        });
        dispatch({ type: "Set", blogs: blogs });
        });

    },[]);


    async function handleSubmit(e){
        e.preventDefault();

        // setBlogs([{title:formData.title,content:formData.content}, ...blogs])
        // don't becuase it not support realtime based so we create listener through onSnapshot
        // dispatch({type: "Add", blog: {title:formData.title,content:formData.content}}); //blog is a key info what we have to add 
        
        // Add a new document with a generated id.

        const docRef = await addDoc(collection(db, "GarbageDemo"), {
            title: formData.title,
            content: formData.content,
            createOn : new Date()
        });
        // console.log("Document written with ID: ", docRef.id);
          
        //using setDocs
        // await setDoc(doc(db, "GarbageDemo", "123"), {
        //     title: formData.title,
        //     content: formData.content,
        //     createOn : new Date()
        // });
  
        setFormData({title:"",content:""})
        titleRef.current.focus();
    }

    async function removeBlog(i){
        // setBlogs( blogs.filter((blog,index)=> i !== index) )
        // dispatch({type:"Remove",index: i})
        const docRef = doc(db,"GarbageDemo",i);
        await deleteDoc (docRef);
    }
   
    


    return(
        <>
        <h1>Write a Blog!</h1>
        <div className="section">
            <form onSubmit={handleSubmit}>


            
                <Row label="Title">
                        <input className="input"
                                placeholder="Enter the Title of the Blog here.."
                                value={formData.title}
                                ref={titleRef}
                                onChange={(e)=> {setFormData({title:e.target.value,content:formData.content})}}
                                />
                </Row >

                <Row label="Content">
                        <textarea className="input content"
                                placeholder="Content of the Blog goes here.."
                                value={formData.content}
                                onChange={(e)=> setFormData({title:formData.title,content: e.target.value})}
                                />
                </Row >         
                <button className = "btn">ADD</button>
            </form>         
        </div>

        <hr/>
        <h2> Blogs </h2>
        {blogs.map((blog,i)=>(
            <div className="blog" key={i}>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>

                <div className="blog-btn">
                    <button onClick={()=> removeBlog(blog.id)} className="btn remove">
                        Delete
                    </button>
                </div>
            </div>
        ))}
        </> 
        )
    }

//Row component to introduce a new row section in the form
function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
