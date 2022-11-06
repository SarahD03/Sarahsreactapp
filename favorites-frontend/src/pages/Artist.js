import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import SelectedFav from '../components/SelectedFavorite'
// const BASE_URL = '/'

const Artist = () => {
  let { id } = useParams()

  const [selectedArtist, setSelectedArtist] = useState()

  useEffect(() => {
    const apiCall = async () => {
      const response = await axios.get(`http://localhost:3001/favorites/${id}`)
      console.log(response)
      setSelectedArtist(response.data)
      console.log(`artist page: ${response.data} `)
    }
    apiCall()
  }, [])
  console.log(setSelectedArtist)
  return (
    <div>
      <section className="artist-container">
        {selectedArtist && <SelectedFav fav={selectedArtist} />}
      </section>
    </div>
  )
}

export default Artist
