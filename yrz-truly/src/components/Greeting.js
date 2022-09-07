import React from "react";

function Greeting(){
  const relation = "co-worker"
  const greetings = "You are the apex predator of Excel Spreadsheets."
  return(
    <React.Fragment>
      <h3> Greetings! </h3>
      <h3> A message for your beloved {relation}:</h3>
      <p>{greetings}</p>
      <hr/>
    </React.Fragment>
  );
}

export default Greeting;