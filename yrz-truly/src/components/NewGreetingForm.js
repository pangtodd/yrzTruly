import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewGreetingForm(props){

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
    props.onNewGreetingCreation({
      relation: handleCheckboxValues("relation"),
      occasion: handleCheckboxValues("occasion"),
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