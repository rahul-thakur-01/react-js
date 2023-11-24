import {useState} from "react";
export default function Blog(){

    // const [title,setTitle] = useState("");
    // const [content,setContent] = useState("");

    const [formData,setFormData] = useState({title: "",content: ""});

    const [blogs,setBlogs] = useState([]);
    
    //Passing the synthetic event as argument to stop refreshing the page on submit
    function handleSubmit(e){
        e.preventDefault();

        // setBlogs([{title,content},...blogs]);       //... concept of js called rest keep everything rest and direction is important
        setBlogs([{title:formData.title,content:formData.content}, ...blogs])
        // setTitle("");
        // setContent("");
        setFormData({title:"",content:""})

        // console.log(blogs);
        //we can't see actual look of hooks becuase of asynchonous nature like setState
    }

    function removeBlog(i){
        //filter out blog which not match with index number

        setBlogs(
            blogs.filter((blog,index)=>  //don't use {} it won't work
                i !== index
            )
        )
    }

    return(
        <>
        <h1>Write a Blog!</h1>
        <div className="section">
            <form onSubmit={handleSubmit}>

                <Row label="Title">
                        <input className="input"
                                placeholder="Enter the Title of the Blog here.."
                                // value={title}
                                value={formData.title}
                                // onChange={(e)=> {setTitle(e.target.value)}}
                                onChange={(e)=> {setFormData({title:e.target.value,content:formData.content})}}


                                />
                </Row >

                <Row label="Content">
                        <textarea className="input content"
                                placeholder="Content of the Blog goes here.."
                                // value={content}
                                value={formData.content}
                                // onChange={(e)=> {setContent(e.target.value)}}
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
