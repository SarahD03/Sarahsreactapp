import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import ArtistForm from './components/ArtistForm'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/form" element={<ArtistForm />}></Route>
      </Routes>
    </div>
  )
}

export default App
