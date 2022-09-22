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
      {/* <label>
      <h3>Who is this message good for? Click all that apply.</h3>
        <input 
        type='checkbox'
        name='relation'
        value='co-worker'/>
        co-worker
      </label>
      <br></br>
      <label>
        <input 
        type='checkbox'
        name='relation'
        value='friend'/>
        friend
      </label>
      <br></br>
      <label>
        <input 
        type='checkbox'
        name='relation'
        value='family member'/>
        family member
      </label>
      <br></br>
      
      <h3>What occasion is this message appropriate for? Click all that apply.</h3>
      <label>
        <input 
        type='checkbox'
        name='occasion'
        value='birthday'/>
        Birthday
      </label>
      <br/>
      <label>
        <input 
        type='checkbox'
        name='occasion'
        value='thank you'/>
        Thank you
      </label>
      <br></br>
      <label>
        <input 
        type='checkbox'
        name='occasion'
        value='congratulations'/>
        Congratulations
      </label>
      <br></br>
      <label>
        <input 
        type='checkbox'
        name='occasion'
        value='get well'/>
        Get Well
      </label>
      <br></br>
      <label>
        <input 
        type='checkbox'
        name='occasion'
        value='farewell'/>
        Farewell
      </label>
      <br></br>
      <label>
        <input 
        type='checkbox'
        name='occasion'
        value='farewell'/>
        Welcome aboard
      </label>
      <br></br>
      <label>
        <input 
        type='checkbox'
        name='occasion'
        value='appreciation'/>
        Appreciation
      </label>
      <br></br>
      <label>
        <input 
        type='checkbox'
        name='occasion'
        value='sympathy'/>
        Sorry/sympathy
      </label>
      <br></br> */}
      <h3>And finally, please share your greeting!</h3>
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