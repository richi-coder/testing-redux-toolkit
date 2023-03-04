import './App.css'
import NewNote from './components/NewNote'
import Options from './components/Options'
import NoteList from './components/NoteList'

function App() {

  return (
    <div className="App">
      <h2>FORM TESTING REDUX!</h2>
      <NewNote />
      <Options />
      <NoteList />
    </div>
  )
}

export default App
