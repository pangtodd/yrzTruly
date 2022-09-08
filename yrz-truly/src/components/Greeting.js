import React from "react";

function Greeting(props){
  return(
    <React.Fragment>
      <h3> Greetings! </h3>
      <h3> A message for your beloved {props.relation}:</h3>
      <p>{props.message}</p>
      <hr/>
    </React.Fragment>
  );
}

Greeting.propTypes ={
  relation: PropTypes.string,
  message: ProptTypes.string
}

export default Greeting;