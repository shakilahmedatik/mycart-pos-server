import express from 'express'
import { allItems, addItems } from '../controllers/itemsController'

const router = express.Router()

router.get('/items/get-all-items', allItems)
router.post('/items/add-items', addItems)

module.exports = router
