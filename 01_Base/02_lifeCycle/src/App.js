
import React from "react";
import ComponentA from "./ComponentA"
// import TimerOne from "./Timer/TimerOne"
import ComponentB from "./ComponentB";
import ErrorBoundary from "./ErrorBoundary";


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      mount:false,
      timerOn: false
    }
  }
  handleMount = () => {
    this.setState((prevState) => ({mount: !prevState.mount}));
  }
  handleTimerOn = () => {
    this.setState((prevState) => ({timerOn : !prevState.timerOn}));
  }
 
  render(){
    return(
      <>
        <ErrorBoundary>
          <ComponentA/> 
        </ErrorBoundary>

        <ErrorBoundary>
          <ComponentB/> 
        </ErrorBoundary>


       
        {/* <ComponentB/>  */}

        {/* button for visibility of TimerOne */}
        {/* <button onClick={this.handleMount}>{this.setState.mount ? "Un-Mount" : "Mount"}</button>
        {this.state.mount ? <TimerOne/> : null} */}


        {/* <TimerOne timerOn = {this.state.timerOn}/>
        <button onClick = {this.handleTimerOn}>{this.state.timerOn? "STOP":"START"}</button> */}
        
        




      

      </>
    );
  }

   
}
export default App;