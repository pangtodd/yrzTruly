import React from "react";
import Greeting from "./Greeting";
import PropTypes from "prop-types";

function GreetingList(props){
  return(
    <React.Fragment>
      <hr/>
      {props.greetingList.map((greeting, index)=>
        <Greeting relation={greeting.relation}
        occasion={greeting.occasion}
        message={greeting.message}
        key={index}/> 
      )}
    </React.Fragment>
  );
}

GreetingList.PropTypes={
  greetingList: PropTypes.array
};

export default GreetingList;