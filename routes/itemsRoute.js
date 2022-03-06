import express from 'express'
import { allItems } from '../controllers/itemsController'

const router = express.Router()

router.get('/items', allItems)

module.exports = router
