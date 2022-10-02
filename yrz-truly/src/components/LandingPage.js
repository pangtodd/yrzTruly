import React from "react";
import DroppyDown from "./Dropdown";
import { query, collection, where, getDocs } from 'firebase/firestore'
import { db } from './../firebase.js'

// const q = query(
//   collection(db, "greetings"), 
//   where("occasion", "in", `${inputOccasion}`),
//   where("relation", "in", `${inputRelation}`)
// );

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

function handleGreetingDisplay(){

}


function LandingPage(){
  return(
    <React.Fragment>
      <form onSubmit = {handleGreetingDisplay}>
        <h1>Say something special to that not-so-special someone.</h1>
        <p>Someone just hand you a folder at work. Hiding inside is a card for you to sign, Brenda from Accounting's birthday is today. Ugh. No idea what to write.</p>
        <p>They probably won't read it, but in the off chance they do, use one of our suggestions to come off as clever and thoughtful.</p>

        <h3>who is this for?</h3>
        <DroppyDown options={relation} />
        <br></br>
        <h3>what is the occasion?</h3>
        <DroppyDown options={occasion} />
      </form>
    </React.Fragment>
  )

}

export default LandingPage;

