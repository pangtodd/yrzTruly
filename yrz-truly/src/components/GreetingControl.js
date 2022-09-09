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
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleState = null;
    let addGreetingButton = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleState= <NewGreetingForm />
    } else {
      currentlyVisibleState = <GreetingList />
      addGreetingButton = <button onClick={this.handleClick}>Add Greeting</button>
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        {addGreetingButton}
      </React.Fragment>
    );
  }

}

export default GreetingControl;
