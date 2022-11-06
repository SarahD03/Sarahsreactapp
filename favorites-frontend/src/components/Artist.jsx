import { useState, useEffect } from "react"
import SelectedFav from "./SelectedFavorite"
import axios from "axios"
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'

const BASE_URL = '/'

const Artist = () => {
let { id } = useParams()

    const [selectedFavorite, setSelectedFavorite] = useState()

  useEffect(() => {
    const apiCall = async () => {
      const response = await axios.get(`${BASE_URL}favorites/${id}`)
      console.log(response)
      setSelectedFavorite(response.data)
      console.log(`Ride page : ${response}`)
    }
    apiCall()
  }, [])
    return(
        <div>
            <section>
                <Link to={`/favorites/${id}`}>
                {selectedFavorite && <selectedFav fav={selectedFavorite} />}
                </Link>
            </section>
        </div>
    )
}

export default Artist