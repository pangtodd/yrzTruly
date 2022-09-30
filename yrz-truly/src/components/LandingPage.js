import React from "react";
import DroppyDown from "./Dropdown";

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
  {label:"sorry/sympathy", value:"sorry/sympathy"},
]


function SelectGreeting{
  return(
    <React.Fragment>
      <form onSubmit = {}>
        <h3>who is this for?</h3>
        <DroppyDown options={relation} />
        <br></br>
        <br></br>
        <h3>what is the occasion?</h3>
        <DroppyDown options={occasion} />
      </form>
    </React.Fragment>
  )

}

export default SelectGreeting;

