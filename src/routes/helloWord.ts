import { Router } from "express"
import { hellowWord } from "../controllers/helloWord.controller"
import { logMiddleware } from "../middleware/log"

const router = Router()

/**
 * @description Hello world router
 */
router.get('/', logMiddleware, hellowWord)

export {
    router
}