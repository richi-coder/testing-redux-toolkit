import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote, updateNote } from '../reducers/reducerNote'

const Note = ({note, handleImportance, deleteNote}) => {
    return (
        <li style={{widht: "100%", marginBottom: 25}}>
          {note.content}
          <button onClick={handleImportance} style={{border: "1px solid black", float: "right"}}>{note.important ? "IMPORTANT" : "NON IMPORTANT"}</button>
          <button onClick={deleteNote} style={{border: "1px solid black", float: "right"}}>DELETE</button>
        </li>
    )
}

function NoteList() {
    const notes = useSelector(state => {
      if (state.filter === "ALL") {
        return state.notes
      }
      return state.filter === "IMPORTANT" ?
      state.notes.filter(note => note.important) :
      state.notes.filter(note => !note.important)
    })
    const dispatch = useDispatch();
    console.log(notes, "notes!")


  return (
    <ul style={{margin: 0, padding: 0, textAlign: "left"}}>
    {notes.map(note =>
    <Note
    note={note} 
    key={note.id}
    handleImportance={() => dispatch(updateNote(note.id))}
    deleteNote={() => dispatch(deleteNote(note.id))}
    />
    )}
    </ul>
  )
}

export default NoteList