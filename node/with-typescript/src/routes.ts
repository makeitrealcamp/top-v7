import { Router } from 'express'
import { signUp } from './controllers/user.controller'

const router = Router()

router.route('/').post(signUp)

export default router;
