import axios from 'axios'
import { useEffect, useState } from 'react'
import ArtistList from '../components/ArtistList'
import { Link } from 'react-router-dom'

const AllArtists = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const getFavorites = async () => {
      const response = await axios.get('http://localhost:3001/favorites')
      setFavorites(response.data.favorites)
    }
    getFavorites()
  }, [])

  return favorites !== null ? (
    <div>
      <h3>all the artist!</h3>
      {favorites.map((fav) => (
        <Link to={`/favorites/${fav._id}`}>
          <ArtistList
            key={fav._id}
            artistId={fav._id}
            name={fav.artist}
            image={fav.image}
          />
        </Link>
      ))}
    </div>
  ) : null
}

export default AllArtists
