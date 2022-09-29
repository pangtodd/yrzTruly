import { useState } from "react";

const DroppyDown = ()=> {

  const options = [
    {label: "co-worker", value:"co-worker"},
    {label: "friend", value: "friend"},
    {label: "family member", value: "family member"},
  ]
  const [value, setValue]= useState("co-worker");

  const handleChange= (event)=> {
    setValue(event.target.value);
  };

  return(
    <div>
      <label>
        who is this greeting for?
        <br/>
        <br/>
        <select value={value} onChange={handleChange}>
          {options.map((option)=>(
            <option value= {option.value}>{option.label}</option>
          ))}
        </select>
      </label>
      <p>you selected {value}</p>
    </div>
  );
};


export default DroppyDown;