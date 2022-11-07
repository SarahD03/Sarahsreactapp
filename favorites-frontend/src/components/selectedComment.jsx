import axios from 'axios'
import React from "react"
import { useState } from 'react'


const SelectedComment = (props) => {
console.log(props.com)

    const handleDelete = async () => {
        await axios.delete(`http://localhost:3001/favorites/${props.com._id}`)
        alert('Artist deleted')
      }



    return(
        <div>
            <h2>
            {props.com.title}
            <button onClick={handleDelete}>delete?</button>
            </h2>
        </div>
    )
}

export default SelectedComment