import { useState, useEffect } from 'react'
import axios from "axios";
import {useParams} from 'react-router-dom'
import React from 'react';


const UserComments = (props) => {
  const handleRefresh = () => {
    window.location.reload(false)
  }
    const [comments, updateComments] = useState([])

        const [formState, setFormState] = useState({
          title: '',
          name: '',
          body: ''
        })
    
        useEffect(() => {
          const apiCall = async () => {
            let response = await axios.get('http://localhost:3001/comments')
            updateComments(response.data.comments)
          }
          apiCall()
        }, [])
    
    const handleChange = (event) => {
            setFormState({ ...formState, [event.target.id]: event.target.value })
          }
    
          const handleSubmit = async (event) => {
            event.preventDefault()
            console.log(formState)
            console.log('this funtion has been fired')
            let newComment = await axios
              .post('http://localhost:3001/comments', formState)
              .then((response) => {
                return response
              })
              .catch((error) => {
                console.log(error)
              })
            updateComments([...comments, newComment.data])
            setFormState({ title: '', name: '', body: '' })
            console.log(newComment.data)
            handleRefresh()
            let com = newComment.data.id

          }
let {id} = useParams()

          const handleDelete = async (id) => {
            await axios.delete(`http://localhost:3001/comments/${props.com._id}`)
            const newComments = comments.filter((comment) => {
              return comment.id !== id
              updateComments(newComments)
            })

          }
console.log(props.com)

        return(
            <div>
                <h2>Comments:</h2>
                <form  className='commentform' onSubmit={handleSubmit}>
                <label>Title:</label>
                <input id='title' value={formState.title} onChange={handleChange}></input>
                <label>Name:</label>
                <input id='name' value={formState.name} onChange={handleChange} ></input>
                <label>Message:</label>
                <input id='body'value={formState.body} onChange={handleChange}></input>
                <button className='formbutton' type="submit">Post Comment</button>
                </form>
                <div className='comments'>
                  
                {comments.map((comment) => (
                  <div className='singlecomment' id={comment._id} key={comment._id}>
                    <h2 className='commenttitle'>{comment.title}</h2>
                    <h3>by: {comment.name}</h3>
                    <h4>{comment.body}</h4>
                    <button onClick={handleDelete} >Delete Comment</button>
                  </div>    
                ))}
                </div>

            </div>
        )
    }
    
    export default UserComments