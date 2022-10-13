import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";


function EditGreetingForm(props){
  const { greeting } =props;
  
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

  function handleEditGreetingFormSubmission(event){
    event.preventDefault();
    const now = new Date();
    props.onEditGreeting({
      // relation: handleCheckboxValues("relation"),
      // occasion: handleCheckboxValues("occasion"),
      // message: event.target.message.value,
      id: greeting.id,
      timestamp: now.toISOString(),
    });
  }

  return(
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditGreetingFormSubmission}
        buttonText="Update greeting"/>
    </React.Fragment>
  );
}

EditGreetingForm.propTypes={
  greeting: PropTypes.object,
  onEditGreeting: PropTypes.func,
}

export default EditGreetingForm;