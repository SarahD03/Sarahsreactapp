
import React from "react"


const SelectedFav = (props) => {
console.log(props)


return(
    <div className='artist-card'>
        <h3>{props.fav.artist}</h3>
       <h2><img style={{ width:'300px',  height:'300px'}}  src={props.fav.image}></img></h2>
       <h3>Lyrics: {props.fav.lyrics}</h3>
       <h3> Albums: {props.fav.albums}</h3>
       <h3>id: {props.fav._id}</h3>
    </div>
)
}

export default SelectedFav