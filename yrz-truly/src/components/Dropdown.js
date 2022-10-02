import { useState } from "react";

const DropDown =({ label, value, options, onChange })=> {
  return(
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option)=>(
          <option value ={option.value}>{option.label}</option>
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
        options={props.options}
        value={value}
        onChange={handleChange}
        />
      <p>you selected {value}</p>
    </div>
  );
};

export default DroppyDown;