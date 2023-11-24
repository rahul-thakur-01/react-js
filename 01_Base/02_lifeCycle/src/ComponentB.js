import React from "react"
class ComponentB extends React.Component{

    constructor(){
        super();

        this.state = {
            name: "ComponentB"
        }

        this.state.name = "Component B";
        console.log("ComponentB Contructor");
    }


    static getDerivedStateFromProps(props,state){
        console.log("ComponentB get DerivedStateByProps");
        return null;
    }

    componentDidMount(){
        console.log("ComponentB componentDidMount");
        
    }

    render(){
        console.log("ComponentB Render");
        return(
            <h1>{this.state.name}</h1>
        )
    }
}
export default ComponentB;   