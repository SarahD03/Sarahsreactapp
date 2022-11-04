import axios from "axios"
import { useEffect,useState } from "react"


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
  


    return(
        <div>
            {favorites.map((fav) => (
                <div className="artist-card" key={fav.id} >
                    <img style={{ display: 'block' }} width='40px' height='40px' src={fav.img} alt={fav.name} />
                    <h2>{fav.artist}</h2>
                    <img src={fav.image} alt='artistpic' width={'200px'} height='200px'></img>
                    <h3>Lyric: {fav.lyrics}</h3>
                    <h4>Albums: {fav.albums}</h4>
                    <h4>id: {fav._id}</h4>
                    <button className="deletebutton" type="submit" >Delete Artist?</button>
                </div>
            ))}
        </div>
    )
}

export default ArtistList