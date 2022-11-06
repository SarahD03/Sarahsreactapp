import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SelectedFav from '../components/SelectedFavorite'
const BASE_URL = '/'

const Artist = () => {
  let { id } = useParams()

  const [selectedArtist, setSelectedArtist] = useState()

  useEffect(() => {
    const apiCall = async () => {
      const response = await axios.get(`${BASE_URL}favorites/${id}`)
      console.log(response)
      setSelectedArtist(response.data)
      console.log(`artist page: ${response} `)
    }
    apiCall()
  })

  return (
    <div>
      <section>
        <Link to={`/favorites/${id}`}>
          {selectedArtist && <SelectedFav ride={selectedArtist} />}
        </Link>
      </section>
    </div>
  )
}

export default Artist
