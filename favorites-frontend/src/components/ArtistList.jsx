import axios from "axios"
import { useEffect,useState } from "react"
const BASE_URL = '/'

const ArtistList = () => {

    const [favorites, updateFavorites] = useState([])

  
    useEffect(() => {
      const apiCall = async () => {
        let response = await axios.get('http://localhost:3001/favorites')
        console.log(response.data.favorites)
        updateFavorites(response.data.favorites)
      }
      apiCall()
    }, [])
  
const handleDelete = async () => {
    await axios.delete(`${BASE_URL}/favorites/${favorites._id}`)
}




    return(
        <div>
            {favorites.map((fav) => (
                <div className="artist-card" key={fav.id} >
                    <img style={{ display: 'block' }} width='40px' height='40px' src={fav.img} alt={fav.name} />
                    <h2>{fav.artist}</h2>
                    <img src={fav.image} alt='artistpic' width={'200px'} height='200px'></img>
                    <h3>Lyric: {fav.lyrics}</h3>
                    <h4>Albums: {fav.albums}</h4>
                </div>
            ))}
        </div>
    )
}

export default ArtistList