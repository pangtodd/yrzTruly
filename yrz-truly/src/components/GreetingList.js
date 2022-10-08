import React from "react";
import Greeting from "./Greeting";
import PropTypes from "prop-types";
import DroppyDown from "./Dropdown";
import {useState} from 'react';

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
        <form onSubmit = {handleGreetingDisplay}>
        <h1>Browse Greetings</h1>
        <h3>who is this for?</h3>
        <DroppyDown options={relation} label = {"relation"} />
        <br></br>
        <h3>what is the occasion?</h3>
        <DroppyDown options={occasion} label= {"occasion"}/>
        <br></br>
        <button type = 'submit'>Get message!</button>
      </form>
      <hr/>
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
      
  
    </React.Fragment>
  );
}

GreetingList.propTypes={
  greetingList: PropTypes.array,
  onGreetingSelection: PropTypes.func
};

export default GreetingList;