import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import React from "react"



const BASE_URL = "/"

const SelectedFav = () => {

let {id} = useParams()
console.log(id)


// const [selectedFavorite, setSelectedFavorite] = useState()
// useEffect(() => {
//     const apiCall = async () => {
//       const response = await axios.get('http://localhost:3001/favorites')
//       console.log(response.data)
//       setSelectedFavorite(response.data)
//     //   console.log(`Ride page : ${response.data}`)
//     console.log(response.data)
//     }
//     apiCall()
//   }, [])


return(
    <div>
        <h3>...</h3>
       <h2>{}</h2>

    </div>
)
}

export default SelectedFav