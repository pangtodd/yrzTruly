import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditGreetingForm(props){
  const { greeting } =props;

  function handleEditGreetingFormSubmission(event){
    event.preventDefault();
    props.onEditGreeting({
      relation: event.target.relation.value,
      occasion: event.target.occasion.value,
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