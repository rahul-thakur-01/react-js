import React from "react";

export default class Input extends React.Component{
    constructor(){
        super();
        this.state = {
            name : "",
            lastName : ""
        }
    }
    handleName = (e) => {
        this.setState({
            name : e.target.value
        })
    }
    handleLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }
    componentDidMount(){
        document.title = this.state.name + " "+this.state.lastName

        //perfoming multiple side - effect 
        this.timer = setInterval(() => {
            console.log("window_width : ",window.innerWidth)
        },2000)
    }
    componentWillUpdate(){
        document.title = this.state.name + " "+this.state.lastName
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render(){
        return(
            <>
            <div className="section">
                <Row label="Name">
                        <input onChange={this.handleName} value={this.state.name} className="input" />
                </Row >
                {/* onChange value got changed on value channge event Hanlder got called  */}
                <Row label="Last Name">
                        <input value={this.state.lastName} onChange={this.handleLastName} className="input"/>
                </Row >
            </div>
    
            <h2>Hello, {this.state.name + " " + this.state.lastName}</h2>
            
            </>
            )
    }

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
