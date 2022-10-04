import React from "react";
import DroppyDown from "./Dropdown";
import PropTypes from "prop-types";


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
  {label:"farwell", value:"farewell"},
  {label:"welcome aboard", value:"welcome aboard"},
  {label:"sympathy", value:"sympathy"},
]

// const inputOccation= "birthday";
// const inputRelation= "co-worker";

function LandingPage(props){
  // const inputRelation = "co-worker";
  // const inputOccasion = "Birthday";

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
    document.getElementById('output').innerHTML = quote.message;
    // 

    // const inputOccasion = "birthday";
    // const inputRelation = "co-worker";
    // const quote = filteredGreeting(inputOccasion, inputRelation);
    // let answer= quote.message;
    // console.log(answer)
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
        <button type = 'submit'>Get message!</button>
      </form>
      <h1 id="output"></h1>
      
    </React.Fragment>
  );
}

LandingPage.propTypes={
  greetingList: PropTypes.array
}

export default LandingPage;

