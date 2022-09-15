import React from 'react';
import PropTypes from "prop-types";

function ReusableForm(props) {
  return(
    <React.Fragment>
    <form onSubmit ={props.formSubmissionHandler}>
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
      <button type='submit'>Submit greeting</button>
      <br></br>
      <br></br>
    </form>
  </React.Fragment>
  );
}

ReusableForm.propTypes={
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
}

export default ReusableForm;