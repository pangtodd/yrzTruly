import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewGreetingForm(props){

  function handleNewGreetingFormSubmission(event){
    event.preventDefault();
    props.onNewGreetingCreation({
      relation: event.target.relation.value,
      occation: event.target.occasion.value,
      message: event.target.message.value,
      id: v4()
    });
    
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