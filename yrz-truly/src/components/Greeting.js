import React from "react";
import PropTypes from "prop-types";

function Greeting(props){
  return(
    <React.Fragment>
      <div onClick={()=> props.whenGreetingClicked(props.id)}>
        <h3> Greetings! </h3>
        <h3> A message for your beloved {props.relation} regarding their {props.occasion}:</h3>
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