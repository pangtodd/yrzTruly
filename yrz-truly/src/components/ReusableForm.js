import React from 'react';
import PropTypes from "prop-types";
import CheckyBoxes from "./Checkbox";
import Button from '@mui/material/Button';

const allRelations = [
  {name:"relation", value: "co-worker"},
  {name:"relation", value:"friend"},
  {name:"relation", value:"family member"},
];

const allOccasions  = [
  {name:"occasion", value:"birthday"},
  {name:"occasion", value:"congratulations"},
  {name:"occasion", value:"thank you"},
  {name:"occasion", value:"get well"},
  {name:"occasion", value:"farewell"},
  {name:"occasion", value:"welcome aboard"},
  {name:"occasion", value:"sympathy"},
] 

function ReusableForm(props) {
  return(
    <React.Fragment>
      <form onSubmit ={props.formSubmissionHandler}>
        <h3> Who is this message for?</h3>
        <CheckyBoxes inputs = {allRelations} />
        <h3>What occasion(s) does this message address?</h3>
        <CheckyBoxes inputs ={allOccasions}/>  
        <h3>And finally, please share your greeting!</h3>
        <textarea
          name= 'message'
          placeholder='your message'/>
          <br></br>
          <br></br>
        <Button variant= "contained" color='inherit' type="submit">Submit greeting</Button>
        <br></br>
      </form>
      <br></br>
  </React.Fragment>
  );
}

ReusableForm.propTypes={
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
}

export default ReusableForm;