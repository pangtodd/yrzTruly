import React from 'react';
import NewGreetingForm from './NewGreetingForm';
import GreetingList from './GreetingList';

class GreetingControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = ()=> {
    this.setState(prevState=>({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleState= <NewGreetingForm />
      buttonText= "return to list"; 
    } else {
      currentlyVisibleState = <GreetingList />
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
