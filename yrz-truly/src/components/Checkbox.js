import { useState } from "react";

const Checkbox =({ isChecked, label, name, value, checkHandler, index})=>{
  return(
    <div>
      <input
        type="checkbox"
        id={`checkbox-${index}`}
        name={name}
        value={value}
        checked = {isChecked}
        onChange={checkHandler}
        />
        <label htmlFor={`checkbox=$index`}>{label}</label>
    </div>
  )
}

function CheckyBoxes(props){
  const [options, setOptions]= useState(props.inputs.map((option)=>(
    {...option, checked: false}
  )));
//
  const updateCheckStatus = index=> {
    setOptions(
      options.map((option, currentIndex)=>
      currentIndex ===index
        ?{...option, checked: !option.checked}
        :option
      )
    )
  }

  return(
    <div className="checkboxOptions">
      {options.map((option, index)=>(
        <Checkbox
          key={option.value}
          isChecked={option.checked}
          checkHandler={()=>updateCheckStatus(index)}
          label={option.value}
          name={option.name}
          value={option.value}
          index={index}
          />
      ))}
    </div>
  )
}

export default CheckyBoxes
