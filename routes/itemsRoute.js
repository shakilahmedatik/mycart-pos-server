import express from 'express'
import {
  allItems,
  addItem,
  editItem,
  deleteItem,
} from '../controllers/itemsController'

const router = express.Router()

router.get('/items/get-all-items', allItems)
router.post('/items/add-items', addItem)
router.put('/items/edit-item', editItem)
router.delete('/items/delete-item/:id', deleteItem)

module.exports = router
