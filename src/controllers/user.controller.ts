import { Request, Response } from "express"

import { 
    createUser,
    getUsers,
    getUserById,
    deleteUser,
updateUser
} from "../services/user.service"
import { UserInterfaz } from "../interfaces/user.interface"

/**
 * 
 * @param req 
 * @param res 
 */
const createUserController = async (req:Request, res:Response) => {
    try {
        const response = await createUser(req.body)
        res.status(201).json({
            message: "Resource created Successfully.",
            data: response
        })
    } catch (error) {
        res.status(500).json({
            message: " Internal Server Error!"
        })
    }
}
/**
 * 
 * @param req 
 * @param res 
 */
const getUsersController = async (req:Request, res:Response) =>{
    try {
        const response = await getUsers()
        res.status(200).json({
        message: "Successfully response.",
        data : response
    })
        
    } catch (error) {
        res.status(500).json({
            message: " Internal Server Error!"
        })
    }
}
/**
 * 
 * @param param0 
 * @param res 
 */
const getUserByIdController = async ({params}:Request, res:Response) =>{
    try {
        const { id } = params
        const response = await getUserById(+id)
        if(!response){
            throw new Error("Resource not found")
        }
        res.status(200).json({
            message: "Successfully response.",
            data : response
        })
    } catch (error) {
        res.status(500).json({
            message: ` Internal Server Error!`
        }) 
    }
}
/**
 * 
 * @param param0 
 * @param res 
 */
const updateUserController = async (req :Request, res:Response) =>{
    try {
        const { body, params } = req

        console.log(params)
        console.log(body)
        const response = await updateUser(+params.id, body)
        res.status(200).json({
            message: "Successfully response.",
            data : response
        })
    } catch (error) {
        res.status(500).json({
            message: " Internal Server Error!"
        })
    }
}
/**
 * 
 * @param param
 * @param res 
 */
const deleteUserController = async ({params}:Request, res:Response) =>{
    try {      
        const { id } = params
        const response = await deleteUser(+id)
        res.status(200).json({
            message: "Resource deleted succesfully.",
            data : response
        })
    } catch (error) {
        res.status(500).json({
            message: " Internal Server Error!",
        })
    }
}

export{
    createUserController,
    getUsersController,
    getUserByIdController,
    updateUserController,
    deleteUserController
}