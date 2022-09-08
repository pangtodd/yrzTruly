import React from "react";
import Greeting from "./Greeting";

const mainGreetingList = [
  {
    relation: "co-worker",
    occasion: "work accomplishment",
    message: "You are the apex predator of Excel."
  },
  {
    relation: "sibling",
    occasion: "birthday",
    message: "Statistically, 45% of all pregnancies are unplanned. Happy Birthday!"
  },
]

function GreetingList(){
  return(
    <Greeting 
      relation = "co-worker"
      message = "You are the apex predator of Excel."
      />
  );
}

export default GreetingList;