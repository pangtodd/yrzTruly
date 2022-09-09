import React from "react";
import PropTypes from "prop-types";

function NewGreetingForm(props){

  function handleNewGreetingFormSubmission(event){
    event.preventDefault();
    console.log(event.target.relation.value);
    console.log(event.target.occasion.value);
    console.log(event.target.message.value);
  }

  return(
    <React.Fragment>
      <form onSubmit ={handleNewGreetingFormSubmission}>
        <input 
          type='text'
          name='relation'
          placeholder='who is this message for?'/>
          <br></br>
          <br></br>
        <input
          type='text'
          name='occasion'
          placeholder='occasion?'/>
          <br></br>
          <br></br>
        <textarea
          name= 'message'
          placeholder='your message'/>
          <br></br>
          <br></br>
        <button type='submit'>Submit message</button>
        <br></br>
        <br></br>
      </form>
    </React.Fragment>
  );
}

NewGreetingForm.propTypes={
  onNewGreetingCreation: PropTypes.func,
}

export default NewGreetingForm;