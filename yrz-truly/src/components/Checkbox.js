import { useState } from "react";

const allRelations = [
  {name:"co-worker", checked: false},
  {name:"friend", checked: false},
  {name:"family member", checked: false},
]

const allOccasions  = [
  {name:"birthday", checked: false},
  {name:"thank you",checked: false},
  {name:"get well", checked: false},
  {name:"farwell", checked: false},
  {name:"welcome Aboard",checked: false},
  {name:"sorry/sympathy", checked: false},
]

export const Checkbox =({ isChecked, label, checkHandler, index})=>{
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

function CheckyBoxes(){
  const [relations, setRelations]= useState(allRelations)

  const updateCheckStatus = index=> {
    setRelations(
      relations.map((relation, currentIndex)=>
      currentIndex ===index
        ?{...relation, checked: !relation.checked}
        :relation
      )
    )
  }

  return(
    <div className="app">
      {relations.map((relation, index)=>(
        <Checkbox
          key={relation.name}
          isChecked={relation.checked}
          checkHandler={()=>updateCheckStatus(index)}
          label={relation.name}
          index={index}
          />
      ))}
      <p> 
        {console.log(relations)}
        <pre>{JSON.stringify(relations, null, 2)}</pre>
      </p>
    </div>
  )
}

export default CheckyBoxes
