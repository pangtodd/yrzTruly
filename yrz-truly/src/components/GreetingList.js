import React from "react";
import Greeting from "./Greeting";

function GreetingList(){
  return(
    <Greeting 
      relation = "co-worker"
      message = "You are the apex predator of Excel."
      />
  );
}

export default GreetingList;