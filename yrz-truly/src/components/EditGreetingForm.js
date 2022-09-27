import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditGreetingForm(props){
  const { greeting } =props;
  
  function handleCheckboxValues(checkboxType){
    const checkyboxes =document.getElementsByName(checkboxType);
    let result = "";
    for (var i =0; i< checkyboxes.length; i++){
      console.log(checkyboxes[i].checked)
      if (checkyboxes[i].checked){
        result+= checkyboxes[i].value+", ";
      }
    }
    return result.slice(0, -2);
  }

  function handleEditGreetingFormSubmission(event){
    event.preventDefault();
    props.onEditGreeting({
      relation: handleCheckboxValues("relation"),
      occasion: handleCheckboxValues("occasion"),
      message: event.target.message.value,
      id: greeting.id
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