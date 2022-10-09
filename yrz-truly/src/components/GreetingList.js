// import React from "react";
import Greeting from "./Greeting";
import PropTypes from "prop-types";
import DroppyDown from "./Dropdown";
import {useState} from 'react';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


const relation = [
  { label: 'co-worker', value: 'co-worker' },
  { label: 'friend', value: 'friend' },
  { label: 'family member', value: 'family member' },
];

const occasion= [
  {label:"birthday", value:"birthday"},
  {label:"congratulation", value:"congratulations"},
  {label:"thank you", value:"thank you"},
  {label:"get well", value:"get well"},
  {label:"farewell", value:"farewell"},
  {label:"welcome aboard", value:"welcome aboard"},
  {label:"sympathy", value:"sympathy"},
]

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
    // setIsShown(true);
    // document.getElementById('output').innerHTML = quote.message;
  };


  return(
    <React.Fragment>
      <h3>Sort through greetings</h3>
      <p>Got a better idea? Sign in to add a new greeting or to edit/delete one you wrote.</p>
      <form onSubmit = {handleGreetingDisplay}>
        <Box sx={{ border: 3, borderColor: "#53868b", bgcolor: "inherit", color: 'primary.contrastText', flexGrow: 1 }}>
          <Grid container spacing={2} background= 'primary.main' color='black'>
            <Grid  item xs={6} md={4}>
              <h3 align="center">Who is this for?</h3>
              <div align ="center"><DroppyDown options={relation} label = {"relation"} /></div>
            </Grid>
            <Grid item xs={6} md={4}>
              <h3 align="center">What is the occasion?</h3>
              <div align ="center"><DroppyDown options={occasion} label = {"occasion"} /></div>
              <br></br>
            </Grid>
            <Grid item xs={6} md={4}>
              <br></br>
              <br></br>
              <div align="center"><button type = 'submit'>Get message!</button></div>
            </Grid>
          </Grid>
        </Box>
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
    <Button variant= "contained" color='inherit' onClick={props.onClickAddGreeting}>Add greeting</Button>
  
    </React.Fragment>
  );
}

GreetingList.propTypes={
  greetingList: PropTypes.array,
  onGreetingSelection: PropTypes.func,
  onClickAddGreeting: PropTypes.func,
};

export default GreetingList;