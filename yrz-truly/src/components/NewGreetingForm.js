import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewGreetingForm(props){

  function handleNewGreetingFormSubmission(event){
    event.preventDefault();
    props.onNewGreetingCreation({
      relation: event.target.relation.value,
      occasion: event.target.occasion.value,
      message: event.target.message.value,
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