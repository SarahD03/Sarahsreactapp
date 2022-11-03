const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

//create
router.post('/favorites', controllers.createFavorite)
//get all favs
router.get('/favorites', controllers.getAllFavorites)
//get one fav
router.get('/favorites/:id', controllers.getFavorite)
//update fav
router.put('/favorites/:id', controllers.updateFavorite)
//delete fav
router.delete('/favorites/:id', controllers.deleteFavorite)

//comments crud

//create
router.post('/comments', controllers.createComment)
// get all
router.get('/comments', controllers.getAllComments)
//get one comment
router.get('/comments/:id', controllers.getComment)
//update comment
router.put('/comments/:id', controllers.updateComment)
//delete comment
router.delete('/comments/:id', controllers.deleteComment)

module.exports = router

module.exports = router
