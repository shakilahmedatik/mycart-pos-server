import express from 'express'
import { chargeBill } from '../controllers/billsController'

const router = express.Router()

// Add bills
router.post('/bills/charge-bill', chargeBill)

module.exports = router
