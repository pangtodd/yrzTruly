import DroppyDown from "./Dropdown";
import PropTypes from "prop-types";
import {useState} from 'react';
// new stuff below
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
      <h2> Let YrzTruly help you figure out what to write in that greeting card </h2>
      <p>Someone hands you a folder at work. Hiding inside is a card for you to sign, it's Brenda from Accounting's birthday. Ugh. No idea what to write.
        They probably won't read it. But in case they do, use one of our suggestions to come off as clever and thoughtful.</p>
      <br></br>
      <h3>Let's get that card signed!</h3>
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
              <div align="center"> <Button variant= "contained" color='inherit' type="submit">Get message!</Button></div>
            </Grid>
          </Grid>
        </Box>
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