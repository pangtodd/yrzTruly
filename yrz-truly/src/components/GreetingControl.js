import React, { useState } from 'react';
import NewGreetingForm from './NewGreetingForm';
import GreetingList from './GreetingList';
import GreetingDetail from './GreetingDetail';
import EditGreetingForm from './EditGreetingForm';

function GreetingControl(){

  const [formVisibleOnPage, setFormVisibleOnPage]= useState(false);
  const [mainGreetingList, setMainGreetingList]= useState([]);
  const [selectedGreeting, setSelectedGreeting]= useState(null);
  const [editing, setEditing]= useState(false);

  const handleClick = ()=> {
    if (selectedGreeting != null) {
      setFormVisibleOnPage(false);
      setSelectedGreeting(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const handleAddingNewGreetingToList = (newGreeting)=>{
    const newMainGreetingList = mainGreetingList.concat(newGreeting);
    setMainGreetingList(newMainGreetingList);
    setFormVisibleOnPage(false)
  }

  const handleChangingSelectedGreeting = (id)=> {
    const selection = mainGreetingList.filter(greeting=>greeting.id === id)[0];
    setSelectedGreeting(selection);
  }

  const handleDeletingGreeting =(id)=>{
    const newMainGreetingList = mainGreetingList.filter(greeting=>greeting.id!==id);
    setMainGreetingList(newMainGreetingList);
    setSelectedGreeting(null);
  }

  const handleEditClick=()=>{
    setEditing(true);
  }

  const handleEditingGreetingInList=(greetingToEdit)=>{
    const editedMainGreetingList = mainGreetingList
      .filter(greeting=>greeting.id !== selectedGreeting.id)
      .concat(greetingToEdit);
    setMainGreetingList(editedMainGreetingList);
    setEditing(false);
    };



let currentlyVisibleState = null;
let buttonText = null;

if(editing){
  currentlyVisibleState=
    <EditGreetingForm
      greeting = {selectedGreeting}
      onEditGreeting= {handleEditingGreetingInList}/>
    buttonText="return to ticket list";
} else if (selectedGreeting != null){
  currentlyVisibleState = 
    <GreetingDetail 
      greeting = {selectedGreeting}
      onClickingDelete={handleDeletingGreeting} 
      onClickingEdit = {handleEditClick}/>
      buttonText="return to list";
} else if (formVisibleOnPage){
  currentlyVisibleState= 
    <NewGreetingForm 
      onNewGreetingCreation={handleAddingNewGreetingToList} />
      buttonText= "return to list"; 
} else {
  currentlyVisibleState = 
    <GreetingList 
      onGreetingSelection ={handleChangingSelectedGreeting}
      greetingList ={mainGreetingList} />;
    buttonText= "add greeting"
}
  
  return(
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={handleClick}>{buttonText}</button>
    </React.Fragment>
  );
}



export default GreetingControl;
