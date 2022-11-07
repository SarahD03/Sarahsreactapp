import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import UserComments from '../components/UserComments'
import { Link } from 'react-router-dom'

const Comments = () => {
  let { id } = useParams()

  const [selectedComment, setSelectedComment] = useState()

  useEffect(() => {
    const apiCall = async () => {
      const response = await axios.get(`http://localhost:3001/comments/${id}`)
      console.log(response)
      setSelectedComment(response.data)
      console.log(` comment: ${response.data} `)
    }
    apiCall()
  }, [])
  console.log(setSelectedComment)

  const [comments, updateComments] = useState([])
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/comments/${id}`)
    const newComments = comments.filter((comment) => {
      return comment.id !== id
      updateComments(newComments)
    })
  }

  return (
    <div>
      <Link to>
        {selectedComment && <selectedComment com={selectedComment} />}...
      </Link>
      <h1>comment deleted</h1>
    </div>
  )
}
export default Comments
