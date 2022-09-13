import React from 'react';
import NewGreetingForm from './NewGreetingForm';
import GreetingList from './GreetingList';
import GreetingDetail from './GreetingDetail';

class GreetingControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainGreetingList: [],
      selectedGreeting: null,
    };
  }

  handleClick = ()=> {
    if (this.state.selectedGreeting != null){
      this.setState({
        formVisibleOnPage: false,
        selectedGreeting: null
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

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedGreeting != null){
      currentlyVisibleState = 
        <GreetingDetail 
          greeting = {this.state.selectedGreeting}/>
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
