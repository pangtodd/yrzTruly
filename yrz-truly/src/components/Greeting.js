import React from "react";
import PropTypes from "prop-types";

function Greeting(props){
  const relationString = props.relation.toString().replaceAll(",",", ");
  const occasionString = props.occasion.toString().replaceAll(",",", ");
  return(
    <React.Fragment>
      <div onClick={()=> props.whenGreetingClicked(props.id)}>
        <p> Audience: {relationString}</p>
        <p> Occasion: {occasionString}</p>
        <h3>{props.message}</h3>
        <br></br>
        <p> author: {props.author}</p>
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