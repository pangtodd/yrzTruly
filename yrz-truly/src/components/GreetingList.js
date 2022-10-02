import React from "react";
import Greeting from "./Greeting";
import PropTypes from "prop-types";

function GreetingList(props){

  return(
    <React.Fragment>
      <hr/>
      {props.greetingList.map((greeting)=>
        <Greeting
          whenGreetingClicked = { props.onGreetingSelection} 
          relation={greeting.relation}
          occasion={greeting.occasion}
          message={greeting.message}
          id={greeting.id}
          key={greeting.id} /> 
      )}
    </React.Fragment>
  );
}

GreetingList.propTypes={
  greetingList: PropTypes.array,
  onGreetingSelection: PropTypes.func
};

export default GreetingList;