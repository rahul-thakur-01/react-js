//  JAVASCRIPT 

// const heading = document.createElement("h2");
//     heading.textContent = "Hello World";
//     heading.className = "header";
//     document.getElementById("root").append(heading);
//     console.log("JavaScript element : ",heading);





/** React  */
// const reactHeading = React.createElement("h1",{className : "head"},"Hello React");

// const reactHeading = React.createElement("h1",{className : "head",id:"reactHead", children :"HelloReact !!"});

// create element has three arguements => type,{null}(attibutes},content second attributes is mandatory 

// console.log("React element : ", reactHeading);

//this will return an object & inside the props : all attributes inside it also has children that is textcontent
// and we can pass textContent from children attributes also 

// to append 


// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);
// my virtual dom start creating form root(startRoot) and it's children 

// ReactDom is a virtual DOM (powerfull features) 
// DOM -> document(html) object(node elemnet of html), model(structure of html))
// IN javascript we directly manipulated the dom with (document) and (document.get...) 
// IN React we can't directly manipulates the dom 
// VDOM -> the virtual dom is a programming concept where an ideal, or "virtual" , representation of a UI is kept
// in memory and synced with the real "DOM";
// accessing actual dom evertytime through javascript is time consuming step 
// React will create Updated virtaul dom & also Pre-updated virtail dom (extact copy of original dom) 2 tree
// if any change happens it got updated in updated virtual dom and it compare  with pre-updates if any change see at any particular node, then at that node only it got updated in
//  original dom it got updated it doesn't forces children tree to render and it's very quick 

// But using JS if we make changes in original dom , when any changes we make at any node it forces it children 
// to be render but that's not the case with react 

// Once this is done, the virtual DOM calculates the best possible method to make these changes to the real DOM. This ensures that there are minimal operations on the real DOM. Hence, reducing the performance cost of updating the real DOM.

// NOTE: When we try to update the DOM in React, the entire Virtual DOM is updated and compared to what it looked like before the update 
// in a process called diffing. These changes are then updated on the Real DOM.


//Till now  we manually tell browser what to create with help of react so now react come with new syntax 
// JSX = javascript xml -> javascript + html (syntactic sugar) => convientent way to write syntax (<h1>adf</h1>)


//React with jsx
//jsx is syntatic sugar for us not for browser so <h1>ad</h1> not understaded by browser we have to convert jsx
// to javascirpt using compiler babel (js compiler) convert jsx to js



// const jsxHeading = (<h1 className="head">Hello JSX</h1> <p> Paragraph </p>);
// showring error h1 p has two elelment we can't assign two elemene or varible to const in js
// we are wrap two element in one parent element with the  use of react fragments or with help of making parent div 

// const jsxHeading = <div>
//     <h1 className="Head"></h1>
//     <p>This is created using JSX</p>
//     </div>
// problem is there is already a parent div (root) inside the root a new div created by give
// upper code . 


const jsxHeading = <React.Fragment>       or <></>
                        <h1 className="Head">Hello JSX</h1>
                        <p>This is created using JSX</p>
                    </React.Fragment>


//using react Fragment create a parent element at the same time it doesn't create a wrapper  
//react frament is early version , you can also user <> </> 
// ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);


//Understanding Babel
//After adding babel also the error is showing becuase we have to mention which part we part to compile
//Not all code got compiled using babel 
//If you want to see how babel is convert your jsx to js go inside head there is a extra script tag 


//babel will convert html code to js code (React);


//components of react 
// create components is like create function in js which has following feature like pass arguments, use many time 
// React is component based
// Two ways to create react components
// 1.) functional (function in js)
// 2.) class-based components (class in js)


// functional components
// name function with capital letter differ from normal function 
// capital letter also tell browser that this is react componets or normal components ( <div> , <p> )


// function App(){
//     return (
//         <> 
//             <h1 className="Head">Hello JSX with app</h1>
//             <p>This is created using JSX(app)</p>
//         </>
//     )
// }

function Name(){
    return (
        <>
        <p>JSX is javascirpt XML</p>
        </>
    )
}

// when you use {} you need to write return 
//Arrow function 

const App = ()=>(
  
    <> 
        <h1 className="Head">Hello JSX with app</h1>
        <p>This is created using JSX(app)</p>
        
    </>
    
)


// use of arrow function arrow function implict return if you didn't mention 
// explicit return in jsx need of parenthesis () to return 

// ReactDOM.createRoot(document.getElementById("root")).render(App());      
// here App() not considered as the components it considered as function 
ReactDOM.createRoot(document.getElementById("root")).render( < App />);

// This is components
// Problem with function App()  it is not component it is not considered as componet you can check in insept component 

// Feature of React 
// 1.) Declarative - jsx
// 2.) Component - Based
// 3.) Efficient for creating SPA (virtual dom)



