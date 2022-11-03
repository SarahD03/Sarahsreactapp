const { Favorite, Comment } = require('../models')

//cruds

//create favorite
const createFavorite = async (req, res) => {
  try {
    const favorite = await new Favorite(req.body)
    await favorite.save()
    return res.status(201).json({
      ride
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

// get or read favorites
const getAllFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find()
    return res.status(200).json({ favorites })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

//get single favorite
const getFavorite = async (req, res) => {
  let selectedFavorite = await Favorite.findById(req.params.id)
  res.json(selectedFavorite)
}

// update favorite
const updateFavorite = async (req, res) => {
  let updateFavorite = await Favorite.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true
    }
  )
  res.json(updateFavorite)
}

// delete favorite
const deleteFavorite = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Favorite.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Artist deleted')
    }
    throw new Error('Artist not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

/// comment crud
// create
const createComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body)
    await comment.save()
    return res.status(201).json({
      ride
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

/// read all comments
const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find()
    return res.status(200).json({ comments })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// get single comment
const getComment = async (req, res) => {
  try {
    let selectedComment = await Comment.findById(req.params.id)
    console.log(selectedComment)
    return res.json(selectedComment)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// update comment

const updateComment = async (req, res) => {
  try {
    let updateComment = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    )
    return res.status(200).json(updateComment)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// delete comment

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Comment.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Comment deleted')
    }
    throw new Error('Comment not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createFavorite,
  getAllFavorites,
  getFavorite,
  deleteFavorite,
  updateFavorite,
  createComment,
  getAllComments,
  getComment,
  updateComment,
  deleteComment
}
