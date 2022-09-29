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

const DroppyDown = ()=> {
  const options = [
    { label: 'Fruit', value: 'fruit' },
    { label: 'Vegetable', value: 'vegetable' },
    { label: 'Meat', value: 'meat' },
  ];

  const [value, setValue]= useState("co-worker");

  const handleChange= (event)=> {
    setValue(event.target.value);
  };

  return(
    <div className="dropdownOptions">
      <DropDown
        label="select audience/occasion"
        options={options}
        value={value}
        onChange={handleChange}
        />
      <p>you selected {value}</p>
    </div>
  );
};



export default DroppyDown;