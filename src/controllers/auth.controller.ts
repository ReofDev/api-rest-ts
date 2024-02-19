import { Request, Response } from "express";
import { regiterNewUser, loginUser } from "../services/auth.Service"



const  registerController = async ({body}: Request, res: Response) =>{
    const responseUser = await regiterNewUser(body)

}
const  loginController = async (req: Request, res: Response) =>{

}


export {
    registerController, 
    loginController
}