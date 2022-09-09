import React from "react";

function NewGreetingForm(props){
  return(
    <React.Fragment>
      <form onSubmit ={handleNewGreetingFormSubmission}>
        <input 
          type='text'
          name='relation'
          placeholder='who is this message for?'/>
        <input
          type='text'
          name='occasion'
          placeholder='occasion?'/>
        <textarea
          name= 'message'
          placeholder='your message'/>
        <button type='submit'>Submit message</button>
      </form>
    </React.Fragment>
  );
}

export default NewGreetingForm;