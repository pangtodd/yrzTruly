import DroppyDown from "./Dropdown";
import * as React from 'react';
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

function FilterMenu(){

  return(
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
          <div align="center"><Button variant= "contained" color='inherit' type = 'submit'>Get message!</Button></div>
        </Grid>
      </Grid>
    </Box>
  )
}

export default FilterMenu;

