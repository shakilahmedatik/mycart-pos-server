import express from 'express'
import { chargeBill } from '../controllers/billsController'

const router = express.Router()

router.post('/items/charge-bill', chargeBill)

module.exports = router
