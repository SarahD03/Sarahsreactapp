import axios from 'axios'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'


const ArtistForm = () => {
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

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    let newFavorites = await axios
      .post('http://localhost:3001/favorites', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    updateFavorites([...favorites, newFavorites.data])
    setFormState({ artist: '', image: '', lyrics: '', albums: '' })
    console.log(newFavorites.data)
  }

  // let { id } = useParams()

  // const [selectedFavorite, setSelectedFavorite] = useState()

  // useEffect(() => {
  //   const apiCall = async () => {
  //     const response = await axios.get(`${BASE_URL}favorites/${id}`)
  //     console.log(response)
  //     setSelectedFavorite(response.data)
  //     console.log(`Artist: ${response}`)
  //   }
  //   apiCall()
  // }, [])

  // let navigate = useNavigate()

  // const handleCard = (id) => {
  //   navigate(`/favorites/${id}`)
  // }

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
