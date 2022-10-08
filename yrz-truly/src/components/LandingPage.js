import React from "react";
import DroppyDown from "./Dropdown";
import PropTypes from "prop-types";
import styled from 'styled-components';
import GreetingControl from './GreetingControl';
import {useState} from 'react';

const TestFonty = styled.h1`
  font-family: Garamond, serif;
`;

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
    <React.Fragment>
      <form onSubmit = {handleGreetingDisplay}>
        <h1>Say something special to that not-so-special someone.</h1>
        <p>Someone hands you a folder at work. Hiding inside is a card for you to sign, it's Brenda from Accounting's birthday. Ugh. No idea what to write.</p>
        <p>They probably won't read it. But in case they do, use one of our suggestions to come off as clever and thoughtful.</p>
        <h3>who is this for?</h3>
        <DroppyDown options={relation} label = {"relation"} />
        <br></br>
        <h3>what is the occasion?</h3>
        <DroppyDown options={occasion} label= {"occasion"}/>
        <br></br>
        <button type = 'submit'>Get message!</button>
      </form>
      <TestFonty>
        <div>
          <h1 id="output"></h1>
          {isShown && (
          <div>
          <button onClick={handleGreetingDisplay}>Meh. Try another one.</button>
          <button onClick={props.onClickBroweList}>Browse full list of greetings.</button>
          </div>
          )}
        </div>
      </TestFonty>
    </React.Fragment>
  );
}

LandingPage.propTypes={
  greetingList: PropTypes.array,
  handleBrowseListClick: PropTypes.func
}

export default LandingPage;

