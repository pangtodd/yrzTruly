import React from 'react';
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

  const handleAddingNewGreetingToList=(newGreeting)=>{
    const newMainGreetingList = mainGreetingList.concat(newGreeting);
    setMainGreetingList(newMainGreetingList);
    setFormVisibleOnPage(false)
  }

  const handleChangingSelectedGreeting = (id)=> {
    const selectedGreeting = this.state.mainGreetingList.filter(greeting=>greeting.id === id)[0];
    this.setState({selectedGreeting: selectedGreeting})
  }

  const handleDeletingGreeting =(id)=>{
    const newMainGreetingList = this.state.mainGreetingList.filter(greeting=>greeting.id!==id);
    setMainGreetingList(newMainGreetingList);
  }

  const handleEditClick=()=>{
    this.setState({editing:true});
  }

  const handleEditingGreetingInList=(greetingToEdit)=>{
    const editedMainGreetingList = mainGreetingList
      .filter(greeting=>greeting.id !==this.state.selectedGreeting.id)
      .concat(greetingToEdit);
    setMainGreetingList(editedMainGreetingList);
    });
  }
}

  // render(){
let currentlyVisibleState = null;
let buttonText = null;

if(this.state.editing){
  currentlyVisibleState=
    <EditGreetingForm 
      greeting={this.state.selectedGreeting}
      onEditGreeting={this.handleEditingGreetingInList}/>
      buttonText="return to list";
} else if (this.state.selectedGreeting != null){
  currentlyVisibleState = 
    <GreetingDetail 
      greeting = {this.state.selectedGreeting}
      onClickingDelete={this.handleDeletingGreeting} 
      onClickingEdit = {this.handleEditClick}/>
      buttonText="return to list";
} else if (this.state.formVisibleOnPage){
  currentlyVisibleState= 
    <NewGreetingForm 
      onNewGreetingCreation={this.handleAddingNewGreetingToList} />
      buttonText= "return to list"; 
} else {
  currentlyVisibleState = 
    <GreetingList 
      onGreetingSelection ={this.handleChangingSelectedGreeting}
      greetingList ={mainGreetingList} />;
    buttonText= "add greeting"
}
  return(
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>

    </React.Fragment>
  );
}



export default GreetingControl;
