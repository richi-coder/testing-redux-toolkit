import React from 'react'
import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/reducerOptions';

function Options() {
  const dispatch = useDispatch();
  
  return (
    <div style={{marginBottom: 20, display: "flex", flexDirection: "row", alignItems: "center", gap: 5}}>
        <input type="radio" onChange={() => dispatch(filterChange("ALL"))} name="radio" /> ALL
        <input type="radio" onChange={() => dispatch(filterChange("IMPORTANT"))} name="radio" /> IMPORTANT
        <input type="radio" onChange={() => dispatch(filterChange("NON-IMPORTANT"))} name="radio" /> NON-IMPORTANT
    </div>
  )
}

export default Options