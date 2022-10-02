import React from "react";
import PropTypes from "prop-types";

function GreetingDetail(props){
  const { greeting, onClickingDelete, onClickingEdit }= props;

  return(
    <React.Fragment>
      <h1>Greeting Detail</h1>
      <h3>relationship to card recipeient: {greeting.relation.toString().replaceAll(",",", ")}</h3>
      <h3>ocassion for card: {greeting.occasion.toString().replaceAll(",",", ")}</h3>
      <h3>greeting: {greeting.message}</h3>
      <button onClick={ onClickingEdit}>Update greeting </button>
      <br/>
      <br/>
      <button onClick={()=>onClickingDelete(greeting.id)}>Delete greeting</button>
      <hr/>
    </React.Fragment>
  );
}

GreetingDetail.propTypes={
  greeting:PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default GreetingDetail;