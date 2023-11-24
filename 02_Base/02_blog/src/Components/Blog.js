import {useState,useEffect,useRef,useReducer} from "react";

function blogsReducer(state,action){

    switch(action.type){
        case "Add": 
            return [action.blog,...state];
        case "Remove":
            return state.filter((blog,index) => index !== action.index);
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

    function handleSubmit(e){
        e.preventDefault();
        // setBlogs([{title:formData.title,content:formData.content}, ...blogs])
        dispatch({type: "Add", blog: {title:formData.title,content:formData.content}}); //blog is a key info what we have to add 
        setFormData({title:"",content:""})
        titleRef.current.focus();
    }

    function removeBlog(i){
        // setBlogs( blogs.filter((blog,index)=> i !== index) )
        dispatch({type:"Remove",index: i})
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
                    <button onClick={()=> removeBlog(i)} className="btn remove">
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
