import { useState } from "react"
import PropTypes from 'prop-types';
const buttonStyle = {
    fontSize:"30px",
    backgroundColor: "#00a5ab",
    width:"100px",
    color:"white",
    padding:"15px",
    margin:"10px",
    borderRadius:"30px"
}

//State : It is a Built-in react object ised to contain data or information about the component.
//(Remember) : In earlier versions of React, ONLY class components have state.
//Hooks were introduced in React 16.8
//--> use State allows adding state to a Function Component
        // it returns two things
        //   1.) current state 2. A function to update state
        

export function Counter({by}) {
    const [count,setCount] = useState(0);
    function incrementCounterFunction(){
            setCount(count+by);
            console.log("counter",count);
            
            
    }
    function decrementCounterFunction(){
        setCount(count-1);
        console.log("counter",count);
        
        
}
    return(
        <div className="Counter">
            <span className="count">{count}</span>
            <button className="counterButton" onClick={incrementCounterFunction}
            style={buttonStyle}
            >{by}</button>
            <button className="counterButton" onClick={decrementCounterFunction}
            style={buttonStyle}
            >-1</button>
        </div>
    )
}

Counter.propTypes = {
    by: PropTypes.number
};
// Counter.defaultProps = {
//     by:5
// }