import { useState } from "react";

const DroppyDown = ()=> {
  const [value, setValue]= useState("co-worker");

  const handleChange= (event)=> {
    setValue(event.target.value);
  };

  return(
    <div>
      <label>
        who is this greeting for?
        <select value={value} onChange={handleChange}>
          <option value="co-worker">co-worker</option>
          <option value="friend">friend</option>
          <option value="family">family member</option>
        </select>
      </label>
      <p>you selected {value}</p>
    </div>
  );
};


export default DroppyDown;