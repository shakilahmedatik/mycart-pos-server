import express from 'express'
import { allBills, chargeBill } from '../controllers/billsController'

const router = express.Router()

// Get Bills
router.get('/bills/charge-bill', allBills)
// Add bills
router.post('/bills/charge-bill', chargeBill)

module.exports = router
