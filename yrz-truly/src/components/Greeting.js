import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../Firebase/context.js";
import Button from '@mui/material/Button';

function Greeting(props){
  const { user } = useContext(AuthContext);
  const relationString = props.relation.toString().replaceAll(",",", ");
  const occasionString = props.occasion.toString().replaceAll(",",", ");

  if (user == null){
    return(
      <React.Fragment>
        <div >
          <p> Audience: {relationString}</p>
          <p> Occasion: {occasionString}</p>
          <h3>{props.message}</h3>
          <br></br>
          <p> author: {props.author}</p>
          <hr/>
        </div>
      </React.Fragment>)
  } else {
  return(
    <React.Fragment>
      <div >
        <p> Audience: {relationString}</p>
        <p> Occasion: {occasionString}</p>
        <h3>{props.message}</h3>
        <br></br>
        <p> author: {props.author}</p>
        {props.author == user.displayName && <Button variant= "contained" color='inherit' onClick={()=> props.whenGreetingClicked(props.id)}>edit</Button>}
        <hr/>
      </div>
    </React.Fragment>
  );
}
}

Greeting.propTypes ={
  relation: PropTypes.array,
  message: PropTypes.string,
  occasion: PropTypes.array,
  author: PropTypes.string,
  id: PropTypes.string,
  whenGreetingClicked: PropTypes.func
}

export default Greeting;