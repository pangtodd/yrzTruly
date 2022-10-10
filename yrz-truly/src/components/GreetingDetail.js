import React from "react";
import PropTypes from "prop-types";
import Button from '@mui/material/Button';

function GreetingDetail(props){
  const { greeting, onClickingDelete, onClickingEdit }= props;

  return(
    <React.Fragment>
      <h1>Greeting Detail</h1>
      <h3>relationship: {greeting.relation.toString().replaceAll(",",", ")}</h3>
      <h3>ocassion: {greeting.occasion.toString().replaceAll(",",", ")}</h3>
      <h3>greeting: {greeting.message}</h3>
      <Button variant= "contained" color='inherit' onClick={ onClickingEdit}> Update greeting </Button>
      <br/>
      <br/>
      <Button variant= "contained" color='inherit'onClick={()=>onClickingDelete(greeting.id)}>Delete greeting</Button>
      <hr/>
      <Button variant= "contained" color='inherit' onClick={props.onClickReturn}>Return to list</Button>
    </React.Fragment>
  );
}

GreetingDetail.propTypes={
  greeting:PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickReturn: PropTypes.func,
};

export default GreetingDetail;