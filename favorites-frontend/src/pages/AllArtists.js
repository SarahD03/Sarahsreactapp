import axios from 'axios'
import { useEffect, useState } from 'react'
import ArtistList from '../components/ArtistList'
const BASE_URL = '/'

const AllArtists = () => {
  const [favorites, setFavorites] = useState(null)

  useEffect(() => {
    const getFavorites = async () => {
      const response = await axios.get(`${BASE_URL}/favorite`)
      setFavorites(response.data.rides)
    }
    getFavorites()
  }, [])
}

export default AllArtists
