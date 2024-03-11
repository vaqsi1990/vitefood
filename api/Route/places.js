const express = require('express')
const foodController = require('../Controller/food')
const router = express.Router()

router.get('/api/users-food', foodController.all)

router.get('/api/food/:id', foodController.edit)

router.put('/api/food', foodController.editFood)

router.delete('/api/delete/:id', foodController.deleteFood)

router.get("/api/single/:id", foodController.singleFood)
router.post('/api/comments/:foodId',   foodController.addComments)

router.get('/api/allFood', foodController.allFood)

router.delete('/api/comments/:commentId',  foodController.deleteComment);

router.post('/api/add-to-favourite', foodController.addToFavourite)

router.delete('/api/remove-favourite/:favouriteId', foodController.removeFromFavourite)

router.get('/api/favourite', foodController.allFavourite)

router.get('/api/all-comments/:foodId', foodController.allComments)

module.exports = router;
