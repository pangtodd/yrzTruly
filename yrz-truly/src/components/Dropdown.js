import { useState } from "react";

const DropDown =({ label, value, options, onChange })=> {
  return(
    <label>
      {label+": "}
      <select id ={label} value={value} onChange={onChange}>
        {options.map((option)=>(
          <option key = {option.value} value ={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

function DroppyDown(props){
  
  const [value, setValue]= useState();

  const handleChange= (event)=> {
    setValue(event.target.value);
  };

  return(
    <div className="dropdownOptions">
      <DropDown
        key = {value}
        label= {props.label}
        options={props.options}
        value={value}
        onChange={handleChange}
        />
    </div>
  );
};

export default DroppyDown;