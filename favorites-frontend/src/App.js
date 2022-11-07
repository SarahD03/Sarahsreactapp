import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import ArtistForm from './components/ArtistForm'
import UserComments from './components/UserComments'
import ArtistList from './components/ArtistList'
import Artist from './pages/Artist'
import AllArtists from './pages/AllArtists'
import Comments from './pages/Comments'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/form" element={<ArtistForm />}></Route>
        <Route path="/comment" element={<UserComments />}></Route>
        <Route path="/favorite" element={<ArtistList />}></Route>
        <Route path="/favorites/:id" element={<Artist />}></Route>
        <Route path="/all/favorites" element={<AllArtists />}></Route>
        <Route path="/comments/:id" element={<Comments />}></Route>
      </Routes>
    </div>
  )
}

export default App
