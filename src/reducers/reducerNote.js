import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = [
    {
        content: "I am getting firmly stronger with React-Redux!",
        id: "testing first id",
        important: true
    },
    {
        content: "Frontend developer!",
        id: "id-second",
        important: false
    }
]
const noteSlicer = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote(state, action) {
            state.push({
                content: action.payload,
                important: false,
                id: uuidv4()
            })
        },
        updateNote(state, action) {
            const noteToChange = state.find(note => note.id === action.payload)
            const index = state.indexOf(noteToChange);
            state[index].important = !state[index].important
        },
        deleteNote(state, action) {
            const noteToDelete = state.find(note => note.id === action.payload)
            const index = state.indexOf(noteToDelete)
            state.splice(index, 1)
            return state
        }
    }
})

export const { addNote, updateNote, deleteNote } = noteSlicer.actions;
export default noteSlicer.reducer