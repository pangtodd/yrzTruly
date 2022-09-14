import React from "react";
import ReusableForm from "./ReusableForm";

function EditTicketForm(props){
  return(
    <React.Fragment>
      <ReusableForm
        buttonText="Update greeting"/>
    </React.Fragment>
  );
}

export default EditTicketForm;