//jsx is itself a expressionn
const header = <h2>JSX Expression</h2> // returning the h2 
function sum(){
    let a = 10+5;
    return a;
}

//function without returning is nothing for jsx becuase it not resolved to a value
//any valid express of js  which resolved to a value (return a value) can be embedded in js



const App = ()=>{
    var name = "rahul";
    var demo = null,demo2 = undefined,demo3=true;

    //After return only jsx will come 
    return (
        <>
            <h1>Let's Learn JSX{name}</h1> 
            <p>Null Value : {demo}</p>
            <p>Undefined Value: {demo2}</p>
            <p>Boolean Value : {demo3}</p>
            <p>Boolean Value : {demo3.toString()}</p>
            <p>Calling sum function: {sum()}</p>
            <p>{header}</p>
        </>
    )
}

//Danger : To display a boolean value you can use the  .toString() method on the variable to convert it into a string.

// () will tell js that whole is jsx expression and a single expression <> is suuficient for making single expression
//but some time js add ; to everyline which may create conflict 

/* null,undefined,Boolean vaule not get printed  */



ReactDOM.createRoot(document.getElementById("root")).render( < App />);