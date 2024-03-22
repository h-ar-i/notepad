
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Add from './components/Add'
import NoteCard from './components/NoteCard'



function App() {

  return (
    <>
    <Routes>
<Route path="/" element={<Add/>}></Route>
<Route path='/notecard' element={<NoteCard/>}></Route>
      
</Routes>
    </>
  )
}

export default App
