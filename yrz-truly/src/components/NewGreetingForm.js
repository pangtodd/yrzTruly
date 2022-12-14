import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { auth } from './../firebase.js';
import Button from '@mui/material/Button';

function NewGreetingForm(props){

  const user = auth.currentUser;

  function handleCheckboxValues(checkboxType){
    const checkyboxes =document.getElementsByName(checkboxType);
    let result = [];
    for (var i =0; i< checkyboxes.length; i++){
      if (checkyboxes[i].checked){
        result.push(checkyboxes[i].value);
      }
    }
    return result;
  }

  function handleNewGreetingFormSubmission(event){
    event.preventDefault();
    const now = new Date();
    props.onNewGreetingCreation({
      relation: handleCheckboxValues("relation"),
      occasion: handleCheckboxValues("occasion"),
      message: event.target.message.value,
      author: user.displayName,
      timestamp: now.toISOString(),
    });
    
  }

  return(
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewGreetingFormSubmission}
        buttonText="submit!"
        />
    <Button variant= "contained" color='inherit' onClick={props.onClickReturn}>Return to list</Button>
    </React.Fragment>
    
  );
}

NewGreetingForm.propTypes={
  onNewGreetingCreation: PropTypes.func,
}

export default NewGreetingForm;