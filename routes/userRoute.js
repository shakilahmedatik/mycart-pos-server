import express from 'express'
import { login, register } from '../controllers/userController'

const router = express.Router()

router.post('/user/login', login)
router.post('/user/register', register)

module.exports = router
