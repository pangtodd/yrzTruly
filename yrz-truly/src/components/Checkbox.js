import { useState } from "react";

const allRelations = [
  {name:"co-worker"},
  {name:"friend"},
  {name:"family member"},
]

const allOccasions  = [
  {name:"birthday"},
  {name:"thank you"},
  {name:"get well"},
  {name:"farwell"},
  {name:"welcome Aboard"},
  {name:"sorry/sympathy"},
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
        <pre>{JSON.stringify(relations, null, 2)}</pre>
      </p>
    </div>
  )
}

export default CheckyBoxes;
