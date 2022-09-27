import { useState } from "react";



const Checkbox =({ isChecked, label, checkHandler, index})=>{
  return(
    <div>
      <input
        type="checkbox"
        id={`checkbox-${index}`}
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
    <div className="relations">
      {options.map((option, index)=>(
        <Checkbox
          key={option.name}
          isChecked={option.checked}
          checkHandler={()=>updateCheckStatus(index)}
          label={option.name}
          index={index}
          />
      ))}
      <p> 
        <pre>{JSON.stringify(options, null, 2)}</pre>
      </p>
    </div>
  )
}

export default CheckyBoxes
