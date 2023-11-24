import React from "react"
// import ComponentB from "./ComponentB";
class ComponentA extends React.Component{

    constructor(){
        super();

        this.state = {
            name: "ComponentA",
            data: []
        }

        this.state.name = "asdf";

        //this is not allowed
        // this.setState({
        //     name: "rahul",
        // })
        console.log("ComponentA Contructor");
    }

    //what ever you return here it is directly set your state if there is some condition satisfied then only return else return null 
    //takes two arguments 
    //this is static method and has no access to this so how can we use this.setState
    static getDerivedStateFromProps(props,state){
        console.log("ComponentA get DerivedStateByProps");
        return null;
    }

    componentDidMount(){
        console.log("ComponenetA componentDidMount");

        fetch('https://jsonplaceholder.typicode.com/user')
            .then(response => response.json())
            // .then(data => console.log(data))
            .then(data => this.setState({data: data}));  //you can simply write data also ({data})
    }


    render(){
        console.log(this.state.data);
        //only ui logic comes
        console.log("ComponenetA Render");

        //this.setState called render function automatically looping happens 
        // this.setState({
        //     name: "rahul",
        // })

        return(
            <>
             <h1>{this.state.name}</h1>
             <ul>
                {this.state.data.map((d,index) => {
                    return(
                        <li key={index}>{d.username}</li>
                    )
                })}
             </ul>
             {/* <ComponentB/> */}
            </>
        )
    }
}

export default ComponentA;   

