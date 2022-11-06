import axios from 'axios'
import React from "react"


const SelectedFav = (props) => {
console.log(props)

const handleRefresh = () => {
    window.location.reload(false)
  }
const handleDelete = async () => {
    await axios.delete(`http://localhost:3001/favorites/${props.fav._id}`)
    handleRefresh()
  }
  console.log(props.fav._id)
return(
    <div className='artist-card'>
        <h1>{props.fav.artist}</h1>
       <h2><img style={{ width:'300px',  height:'300px'}}  src={props.fav.image}></img></h2>
       <h3>Lyrics: {props.fav.lyrics}</h3>
       <h3> Albums: {props.fav.albums}</h3>
       <h3>id: {props.fav._id}</h3>
       <button onClick={handleDelete}>Delete?</button>
    </div>
)
}

export default SelectedFav