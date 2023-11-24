import { useContext } from "react";
import { colorContext } from "../../context";

function GrandChildComponent (props) {

    // const value = useContext(colorContext);
    // console.log(value.color)

    return(
        <colorContext.Consumer>
        <p style={{color:value.color}}>Color: {value.color}</p>
        </colorContext.Consumer>
    )
} 
    
export default GrandChildComponent;