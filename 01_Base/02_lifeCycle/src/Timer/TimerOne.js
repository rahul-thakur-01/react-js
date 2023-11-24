import React  from "react";

export default class Timer extends React.Component{
    constructor(){
        super();
        this.state = {
            // count: 0,
            time: 0
        }
        this.timer = null;
        console.log("TimeOne Constructor");
    }

    static getDerivedStateFromProps(){
        console.log("TimeOne getDerivedStateFromProps");
        return null;
    }

    // In the shouldComponentUpdate() method, you have access to the current props of the component, but the component has not yet been re-rendered with the new props. So, when you log this.props.timer in the shouldComponentUpdate() method, you are seeing the value of the timer prop before the component has been updated.

    // In the componentDidUpdate() method, on the other hand, you have access to the props of the component after it has been re-rendered with the new props. So, when you log this.props.timer in the componentDidUpdate() method, you are seeing the value of the timer prop after the component has been updated.
    
    shouldComponentUpdate(nextProps,nextState){
        console.log("---");
        console.log(this.props.timerOn);
        // console.log(nextProps.timerOn);
        console.log("---");
        // // console.log(nextState);
        // console.log("TimeOnde shouldComponetUpdate");

        return nextProps.timerOn !== this.props.timerOn || nextState.time % 5 === 0;

        // return false;
    }

    handleIncrease = ()=>{
        this.setState((prevState) => {
            return {count:prevState.count+1}
        })
    }

    render(){
        console.log("TimeOne Render");
        return(
            <>
                <h1>TimerSpent</h1>
                {/* new Date take input as millisecond and give the time as object output but in react we can't directly print object so we convert into string  but output is like check below  so we have to use slice*/}
                {/* {new Date(this.state.time*1000).toString()} */}
                {new Date(this.state.time*1000).toISOString().slice(11,19)}

                {/* <h2>{this.state.count}</h2>
                <button onClick={this.handleIncrease}>Increase</button> */}
            </>
        )
    }

    componentDidMount(){
        // no need for this becuase we want change after button click after re-rendering
        console.log("TimeOne ComponentDidMount");
        console.log("___________________________");
    }

    //prevProps is available only when any props is passed from parent to child 
    //if state is set in the constructor  then prevState will be available 
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("TimeOne getSnapShotBeforeUpdate");
        return null;

        //return object reutrn 5; 
    }

    //here snapShot is null whatever we return from upper part in passed here 
    //everything is optional if there is no prevProps or prevState or snapShot no need to pass

    componentDidUpdate(prevProps,prevState,snapShot){
        
        // console.log("===");

        // console.log(prevProps.timerOn);
        console.log(this.props.timerOn);

        if(prevProps.timerOn !== this.props.timerOn) {
            if(this.props.timerOn){
                this.timer = setInterval(() => {
                    this.setState((prevState) => ({
                        time: prevState.time+1
                    }))
                },1000)
            }
            else{
                clearInterval(this.timer);
            }
        }


       
        // if(this.state.time === 10){
        //     clearInterval(this.timer);
        // }

        console.log("TimeOne componentDidUpdate");
        console.log("___________________________");

        // console.log("Previous Props : ", prevProps);
        // console.log("Previous State : ", prevState);
        // console.log("SnapShot from getSnapshotBeforeUpdate", snapShot);
    }

    componentWillUnmount(){
        console.log("TimerOne componentWillUnmount");
        clearInterval(this.timer);
    }
}

 

// NoTES: 
// Date constructor creates a new Date object, which is an object in JavaScript. However, when the Date object is logged to the console, it is automatically converted to a string. This is because the console has special handling for Date objects.
// if you want to see the full object representation of the Date object, you can use the console.dir() function. The console.dir() function logs the object to the console in a detailed way, including all of its properties and methods.

