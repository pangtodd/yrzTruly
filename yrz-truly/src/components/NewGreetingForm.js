import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewGreetingForm(props){

  function handleNewGreetingFormSubmission(event){
    event.preventDefault();
    props.onNewGreetingCreation({
      relation: event.target.relation.value,
      occasion: event.target.occasion.value,
      message: event.target.message.value,
      id: v4()
    });
    
  }

  return(
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewGreetingFormSubmission}
        buttonText="submit!"
        />
    </React.Fragment>
  );
}

NewGreetingForm.propTypes={
  onNewGreetingCreation: PropTypes.func,
}

export default NewGreetingForm;