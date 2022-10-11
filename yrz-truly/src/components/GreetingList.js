// import React from "react";
import Greeting from "./Greeting";
import PropTypes from "prop-types";
import FilterMenu from "./FilterMenu"
import {useState} from 'react';
import { db, auth } from './../firebase.js';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function GreetingList(props){

  const [quotes, setQuotes]=useState([]);

  const filteredGreeting= function(inputOccasion, inputRelation){
    const newBigArray= props.greetingList.filter(greeting=>{return greeting.occasion.includes(inputOccasion)});
    const newFilteredArray= newBigArray.filter(greeting=>{return greeting.relation.includes(inputRelation)});
    return newFilteredArray;
  };
  
  function handleGreetingDisplay(event){
    event.preventDefault();
    const selectOccasionElement = document.getElementById('occasion').value;
    const selectRelationElement = document.getElementById('relation').value;
    const quoteCollection = filteredGreeting(selectOccasionElement,selectRelationElement);
    setQuotes(quoteCollection);
  };

  return(
    <React.Fragment>
      <h3>Sort through greetings</h3>
      {auth.currentUser ?
        (
          <p>Got a better idea? Please share!  <Button variant= "contained" color='inherit' onClick={props.onClickAddGreeting}>Add greeting</Button></p>
            ):(
          <p>Got a better idea? Sign in to add a new greeting or to edit/delete one you wrote.</p>
        )
      }
      <form onSubmit = {handleGreetingDisplay}>
        <FilterMenu />
      </form>
      {quotes == null && 
        <div>
          {props.greetingList.map((greeting)=>
              <Greeting
                whenGreetingClicked = { props.onGreetingSelection} 
                relation={greeting.relation}
                occasion={greeting.occasion}
                message={greeting.message}
                author={greeting.author}
                id={greeting.id}
                key={greeting.id} /> 
            )}
        </div>
      }
      {quotes != null && 
        <div>
          {quotes.map((greeting)=>
              <Greeting
                whenGreetingClicked = { props.onGreetingSelection} 
                relation={greeting.relation}
                occasion={greeting.occasion}
                message={greeting.message}
                author={greeting.author}
                id={greeting.id}
                key={greeting.id} /> 
            )}
        </div>
      
      }
      {auth.currentUser && <Button variant= "contained" color='inherit' onClick={props.onClickAddGreeting}>Add greeting</Button>}
    </React.Fragment>
  );
}

GreetingList.propTypes={
  greetingList: PropTypes.array,
  onGreetingSelection: PropTypes.func,
  onClickAddGreeting: PropTypes.func,
};

export default GreetingList;