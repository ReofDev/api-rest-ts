import { Request, Response } from "express";

// we can import  service here


export const hellowWord = (req: Request, res: Response) => {
    try {
        res.send({
            'data': {
                'message': 'Hello world'
            }
        })
    } catch (error) {
        
    }
}