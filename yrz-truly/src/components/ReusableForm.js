import React from 'react';
import PropTypes from "prop-types";
import CheckyBoxes from "./Checkbox";
import DroppyDown from './Dropdown';

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
  {name:"occasion", value:"welcome Aboard"},
  {name:"occasion", value:"sorry/sympathy"},
] 

const relation = [
  { label: 'co-worker', value: 'co-worker' },
  { label: 'friend', value: 'friend' },
  { label: 'family member', value: 'family member' },
];

const occasion= [
  {label:"birthday", value:"birthday"},
  {label:"congratulation", value:"congratulations"},
  {label:"thank you", value:"thank you"},
  {label:"get well", value:"get well"},
  {label:"farwell", value:"farewell"},
  {label:"welcome aboard", value:"welcome aboard"},
  {label:"sympathy", value:"sympathy"},
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
        <button type='submit'>Submit greeting</button>
        <br></br>
        <br></br>
        <h3>who is this for?</h3>
        <DroppyDown options={relation} />
        <br></br>
        <br></br>
        <h3>what is the occasion?</h3>
        <DroppyDown options={occasion} />

      </form>
  </React.Fragment>
  );
}

ReusableForm.propTypes={
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
}

export default ReusableForm;