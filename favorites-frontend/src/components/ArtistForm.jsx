import axios from 'axios'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'


const ArtistForm = (props) => {
  const handleRefresh = () => {
    window.location.reload(false)
  }

  let initialState = props.newArtist
? {
  artist: props.newArtist.artist,
  image: props.newArtist.image,
  lyrics: props.newArtist.lyrics,
  albums: props.newArtist.albums
}
: {
  artist: '',
  image: '',
  lyrics: '',
  albums: ''
}


  const [favorites, updateFavorites] = useState([])
  const [formState, setFormState] = useState({
    artist: '',
    image: '',
    lyrics: '',
    albums: ''
  })

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/favorites')
      console.log(response)
      updateFavorites(response.data.favorites)
    }
    apiCall()
  }, [])


  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    if(props.action === 'update') {
      await axios.put(`http://localhost:3001/favorites/${props.newArtist._id}`, formState)
      props.setFormToggle(false)
      handleRefresh()
    } else {
    let newFavorites = await axios
      .post('http://localhost:3001/favorites', formState)
      handleRefresh()
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    updateFavorites([...favorites, newFavorites.data])
    setFormState({ artist: '', image: '', lyrics: '', albums: '' })
    console.log(newFavorites.data)
  }}

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }



  return (
    <div className="form">
      <h1>Favorite Artist Directory</h1>
      <form onSubmit={handleSubmit} className="inputs">
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          value={formState.artist}
          onChange={handleChange}
        ></input>
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          value={formState.image}
          onChange={handleChange}
        ></input>
        <label htmlFor="lyrics">Lyrics:</label>
        <input
          id="lyrics"
          value={formState.lyrics}
          onChange={handleChange}
        ></input>
        <label htmlFor="albums">Albums:</label>
        <input
          id="albums"
          value={formState.albums}
          onChange={handleChange}
          placeholder="1,2,3..."
        ></input>
        <button className="formbutton" type="submit">
          Add Artist
        </button>
      </form>
      <div className="list">
        <h3 className="subtitle">Artist list</h3>

        {favorites.map((fav) => (
          <Link to={`/favorites/${fav._id}`}>
            <div key={fav._id}>
              <h2>{fav.artist}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ArtistForm
