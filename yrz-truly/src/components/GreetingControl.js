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

  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleState= <NewGreetingForm />
    } else {
      currentlyVisibleState = <GreetingList />
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }

}

export default GreetingControl;
