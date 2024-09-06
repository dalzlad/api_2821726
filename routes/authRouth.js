import {Router} from 'express'
import {login} from '../controllers/userController.js'

const authRouter = Router()

authRouter.post('/', login)

export default authRouter