import React, { useEffect, useState } from 'react';
import NewGreetingForm from './NewGreetingForm';
import GreetingList from './GreetingList';
import GreetingDetail from './GreetingDetail';
import EditGreetingForm from './EditGreetingForm';
import { db, auth } from './../firebase.js';
import LandingPage from './LandingPage'
import Navbar from './Navbar';
import { collection, addDoc, doc, updateDoc, onSnapshot, deleteDoc } from 'firebase/firestore';

function GreetingControl(){

  const [formVisibleOnPage, setFormVisibleOnPage]= useState(false);
  const [mainGreetingList, setMainGreetingList]= useState([]);
  const [selectedGreeting, setSelectedGreeting]= useState(null);
  const [editing, setEditing]= useState(false);
  const [error, setError]= useState(null);
  const [browseList, setBrowseList]= useState(false)

useEffect(()=> {
  const unSubscribe = onSnapshot(
    collection(db, "greetings"), 
    (collectionSnapshot) => {
      const greetings = [];
      collectionSnapshot.forEach((doc) => {
          greetings.push({
            relation: doc.data().relation, 
            occasion: doc.data().occasion, 
            message: doc.data().message, 
            author: doc.data().author,
            id: doc.id
          });
      });
      setMainGreetingList(greetings);
    }, 
    (error)=>{
      setError(error.message);
    }
  );
  return ()=> unSubscribe();
},[]);

  const handleClick = ()=> {
    if (auth.currentUser == null) {
      buttonText= "signed in users only";
    } else {
      if (selectedGreeting != null) {
        setFormVisibleOnPage(false);
        setSelectedGreeting(null);
        setEditing(false);
      } else {
        setFormVisibleOnPage(!formVisibleOnPage);
      }
  }
  }

  const handleAddingNewGreetingToList = async (newGreetingData)=>{
    await addDoc(collection(db, "greetings"), newGreetingData);
    setFormVisibleOnPage(false);
  }

  const handleChangingSelectedGreeting = (id)=> {
    const selection = mainGreetingList.filter(greeting=>greeting.id === id)[0];
    setSelectedGreeting(selection);
  }

  const handleDeletingGreeting =async (id)=>{
    await deleteDoc(doc(db, "greetings", id));
    setSelectedGreeting(null);
  }

  const handleEditClick=()=>{
    setEditing(true);
  }

  const handleShowBrowseListClick=()=>{
    setBrowseList(current => !current);
    setFormVisibleOnPage(false);
  }

  const handleBrowseListClick=()=>{
    setBrowseList(false);
    setFormVisibleOnPage(false);
  }


  const handleEditingGreetingInList= async (greetingToEdit)=>{
    const greetingRef = doc(db, "greetings", greetingToEdit.id)
    await updateDoc(greetingRef, greetingToEdit);
    setEditing(false);
    setSelectedGreeting(null);
    };


let currentlyVisibleState = null;
let buttonText = null;

  if (error) {
    currentlyVisibleState=
      <p>There was an error: {error}</p>
  } else if(editing) {
    currentlyVisibleState=
      <EditGreetingForm
        greeting = {selectedGreeting}
        onEditGreeting= {handleEditingGreetingInList}/>
  } else if (selectedGreeting != null){
    currentlyVisibleState = 
      <GreetingDetail 
        greeting = {selectedGreeting}
        onClickingDelete={handleDeletingGreeting} 
        onClickingEdit = {handleEditClick}
        onClickReturn={handleClick}/>
  } else if (formVisibleOnPage){
    currentlyVisibleState= 
      <NewGreetingForm 
        onNewGreetingCreation={handleAddingNewGreetingToList} 
        onClickReturn={handleClick}/>
  } else if (browseList==true ){
    currentlyVisibleState = 
      <GreetingList 
        onGreetingSelection ={handleChangingSelectedGreeting}
        greetingList ={mainGreetingList} 
        onClickAddGreeting={handleClick}/>

  } else {
    currentlyVisibleState=
      <LandingPage 
        onClickBroweList ={handleShowBrowseListClick}
        greetingList ={mainGreetingList} />
  }

    return(
      <React.Fragment>
        <Navbar  
          onClickHome ={handleBrowseListClick} 
          onClickAddGreeting={handleClick}/>
        {currentlyVisibleState}
        {error}
      </React.Fragment>
    );
  }


export default GreetingControl;
