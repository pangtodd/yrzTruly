import React from 'react';
import PropTypes from "prop-types";
import CheckyBoxes from "./Checkbox";

const allRelations = [
  {name:"co-worker"},
  {name:"friend"},
  {name:"family member"},
];

const allOccasions  = [
  {name:"birthday"},
  {name:"thank you"},
  {name:"get well"},
  {name:"farewell"},
  {name:"welcome Aboard"},
  {name:"sorry/sympathy"},
] 

function ReusableForm(props) {
  return(

    <React.Fragment>
      <form onSubmit ={props.formSubmissionHandler}>
        <h3> Who is this message for?</h3>
        <CheckyBoxes inputs = {allRelations}
          />
          <h3>What occasion(s) does this message address?</h3>
        <CheckyBoxes inputs ={allOccasions}
          />  
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