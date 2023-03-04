import React from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../reducers/reducerNote';

function NewNote() {
    const dispatch = useDispatch();

    function handleForm(e) {
        e.preventDefault()
        const content = e.target.note.value
        e.target.note.value = ""
        dispatch(addNote(content))
    }
  return (
    <form onSubmit={(e) => handleForm(e)}>
        <input
        type="text"
        name="note" />
        <button 
        type='submit'
        style={{border: "1px solid black", marginTop: 15}}
        >ADD NOTE</button>
    </form>
  )
}

export default NewNote