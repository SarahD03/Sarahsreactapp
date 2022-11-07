import axios from 'axios'
import React from "react"
import { useState } from 'react'


const SelectedComment = (props) => {
console.log(props.com)

    const handleDelete = async () => {
        await axios.delete(`http://localhost:3001/comments/${props.com._id}`)
        alert('comment deleted')
        return 
      }



    return(
        <div>
            <h2>
                Are you sure?
            <button style={{color:"danger"}} onClick={handleDelete}>delete?</button>
            </h2>
        </div>
    )
}

export default SelectedComment