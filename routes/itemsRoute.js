import express from 'express'
import { allItems, addItem, editItem } from '../controllers/itemsController'

const router = express.Router()

router.get('/items/get-all-items', allItems)
router.post('/items/add-items', addItem)
router.put('/items/edit-item', editItem)

module.exports = router
