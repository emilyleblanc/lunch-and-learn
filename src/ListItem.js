import React, { useState } from 'react'

function ListItem(props){
  const [ isChecked, setIsChecked ] = useState(false)

  return(<div key={props.id} className='list-item'>
    <input 
      type="checkbox"
      onChange={() => setIsChecked(!isChecked)}
      checked={isChecked}
      />
    <p>{props.task}</p>
  </div>)
}

export default ListItem;