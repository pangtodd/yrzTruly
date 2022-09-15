import React from 'react';
import NewGreetingForm from './NewGreetingForm';
import GreetingList from './GreetingList';
import GreetingDetail from './GreetingDetail';
import EditGreetingForm from './EditGreetingForm';

class GreetingControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainGreetingList: [],
      selectedGreeting: null,
      editing: false,
    };
  }

  handleClick = ()=> {
    if (this.state.selectedGreeting != null){
      this.setState({
        formVisibleOnPage: false,
        selectedGreeting: null,
        editing: false,
      });
    } else {
    this.setState(prevState=>({
      formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewGreetingToList=(newGreeting)=>{
    const newMainGreetingList = this.state.mainGreetingList.concat(newGreeting);
    this.setState({
      mainGreetingList: newMainGreetingList, 
      formVisibleOnPage: false})
  }

  handleChangingSelectedGreeting = (id)=> {
    const selectedGreeting = this.state.mainGreetingList.filter(greeting=>greeting.id === id)[0];
    this.setState({selectedGreeting: selectedGreeting})
  }

  handleDeletingGreeting =(id)=>{
    const newMainGreetingList = this.state.mainGreetingList.filter(greeting=>greeting.id!==id);
    this.setState({
      mainGreetingList: newMainGreetingList,
      selectedGreeting: null
    });
  }

  handleEditClick=()=>{
    console.log("handleEditClick reached");
    this.setState({editing:true});
  }

  handleEditingGreetingInList=(greetingToEdit)=>{
    const editedMainGreetingList = this.state.mainGreetingList
      .filter(greeting=>greeting.id !==this.state.selectedGreeting.id)
      .concat(greetingToEdit);
    this.setState({
      mainGreetingList: editedMainGreetingList,
      editing: false,
      selectedGreeting: null
    });
  }

  render(){
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
          greetingList={this.state.mainGreetingList} 
          onGreetingSelection ={this.handleChangingSelectedGreeting}/>
          buttonText= "add greeting"
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>

      </React.Fragment>
    );
  }

}

export default GreetingControl;
