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
    message: "Statistically, 45% of all pregnancies/children are unplanned. Happy Birthday!"
  },
]

function GreetingList(){
  return(
    <React.Fragment>
      <hr/>
      {mainGreetingList.map((greeting, index)=>
        <Greeting relation={greeting.relation}
        occasion={greeting.occasion}
        message={greeting.message}
        key={index}/> 
      )}
    </React.Fragment>
  );
}

export default GreetingList;