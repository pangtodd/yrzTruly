import FilterMenu from "./FilterMenu";
import PropTypes from "prop-types";
import {useState} from 'react';
// new stuff below
import Button from '@mui/material/Button';

function LandingPage(props){

  const [isShown, setIsShown]= useState(false);

  const filteredGreeting= function(inputOccasion, inputRelation){
    const newBigArray= props.greetingList.filter(greeting=>{return greeting.occasion.includes(inputOccasion)});
    const newFilteredArray= newBigArray.filter(greeting=>{return greeting.relation.includes(inputRelation)});
    return newFilteredArray[Math.floor(Math.random() * newFilteredArray.length)];
  };
  
  function handleGreetingDisplay(event){
    event.preventDefault();
    const selectOccasionElement = document.getElementById('occasion').value;
    const selectRelationElement = document.getElementById('relation').value;
    const quote = filteredGreeting(selectOccasionElement,selectRelationElement);
    setIsShown(true);
    document.getElementById('output').innerHTML = quote.message;
  };

  return(
    <>
      <h1>Say something special to that not-so-special someone.</h1>
      <h2> Let YrzTruly help you figure out what to write in that greeting card.</h2>
      <p>You're handed a folder at work. Hiding inside is a card for you to sign, it's Brenda from Accounting's birthday. Ugh. No idea what to write. </p>
      <p> Don't phone it in with an obviously thoughtless "happy birthday". Make it <b>look</b> like you put some effort into it with YrzTruly.</p>
      <p>YrzTruly has greeting suggestions for all occasions written by our staff and users like you.</p>
      <br></br>
      <h2>Let's get that card signed!</h2>
      <form onSubmit = {handleGreetingDisplay}> 
        <FilterMenu />
      <br></br>
      </form>
      <div>
          <h1 id="output"></h1>
          {isShown && (
          <div>
          <Button variant= "contained" color='inherit' onClick={handleGreetingDisplay}>Meh. Try another one.</Button>
          <Button variant= "contained" color='inherit' onClick={props.onClickBroweList}>Browse full list of greetings.</Button>
          </div>
          )}
      </div>
    </>
  );
}

LandingPage.propTypes={
  greetingList: PropTypes.array,
  handleBrowseListClick: PropTypes.func
}

export default LandingPage;