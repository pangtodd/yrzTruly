import React from "react";
import PropTypes from "prop-types";

function Greeting(props){
  const relationString = props.relation.toString().replaceAll(",",", ");
  const occasionString = props.occasion.toString().replaceAll(",",", ");
  return(
    <React.Fragment>
      <div onClick={()=> props.whenGreetingClicked(props.id)}>
        <h3> Audience: {relationString} </h3>
        <h3> Occasion: {occasionString}</h3>
        <p>{props.message}</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Greeting.propTypes ={
  relation: PropTypes.string,
  message: PropTypes.string,
  occasion: PropTypes.string,
  id: PropTypes.string,
  whenGreetingClicked: PropTypes.func
}

export default Greeting;