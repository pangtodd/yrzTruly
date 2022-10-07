import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../Firebase/context.js";

function Greeting(props){
  const { user } = useContext(AuthContext);
  const relationString = props.relation.toString().replaceAll(",",", ");
  const occasionString = props.occasion.toString().replaceAll(",",", ");

  
  return(
    <React.Fragment>
      <div >
        <p> Audience: {relationString}</p>
        <p> Occasion: {occasionString}</p>
        <h3>{props.message}</h3>
        <br></br>
        <p> author: {props.author}</p>
        {props.author == user.displayName && <button onClick={()=> props.whenGreetingClicked(props.id)}>edit</button>}
        <hr/>
      </div>
    </React.Fragment>
  );
}

Greeting.propTypes ={
  relation: PropTypes.array,
  message: PropTypes.string,
  occasion: PropTypes.array,
  author: PropTypes.string,

  id: PropTypes.string,
  whenGreetingClicked: PropTypes.func
}

export default Greeting;