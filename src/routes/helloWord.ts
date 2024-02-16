import { Router, Request, Response } from "express"

const router = Router()

/**
 * @description Hello world router
 */
router.get('/', (req:Request, res:Response, next) => {
    res.send({
        'data': {
            'message': 'Hello world'
        }
    })
})

export {
    router
}