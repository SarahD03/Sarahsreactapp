import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import UserComments from '../components/UserComments'
import { Link } from 'react-router-dom'
import SelectedComment from '../components/selectedComment'

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

  return (
    <div>
      {selectedComment && <SelectedComment com={selectedComment} />}....
    </div>
  )
}
export default Comments
