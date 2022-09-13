import React from "react";
import PropTypes from "prop-types";

function GreetingDetail(props){
  const { greeting }= props;

  return(
    <React.Fragment>
      <h1>Greeting Detail</h1>
      <h3>relationship to card recipeient: {greeting.relation}</h3>
      <h3>ocassion for card: {greeting.occasion}</h3>
      <h3>greeting: {greeting.message}</h3>
      <hr/>
    </React.Fragment>
  );
}

GreetingDetail.propTypes={
  greeting:PropTypes.object
};

export default GreetingDetail;