import { UserInterfaz } from "../interfaces/user.interface";
import { userRepository } from "../repository/user.repository"
import { User } from "../entities/User";

/**
 * 
 * @param user 
 */
const createUser = async (user: UserInterfaz) => {
    try {        
        const { firstName, lastName } = user;
    
        const userEntity = new User()
        userEntity.firstName = firstName
        userEntity.lastName = lastName
    
        return await userRepository.save(userEntity);
    } catch (error) {
        console.log(error);
    }
}
/**
 * 
 * @param req 
 */
const getUsers = async () => {
    try {        
        return await userRepository.find()
    } catch (error) {
        console.log(error);
    }
} 

/**
 * 
 * @param id 
 */
const getUserById = async (id: number) => {
    try {
        return await userRepository.findOneBy({
            id: id,
        })
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async (id: number, body: {
    id?: number;
    firstName?: string;
    lastName?: string;
    isActive?: boolean;
}) => {
    try {
        const userExist = await userRepository.findOneBy({ id });

        if (!userExist) {
            console.log("User not found");
            return; 
        }
        const updatedUser = await userRepository.update({ id }, body);
        console.log("User updated successfully:", updatedUser);
        return updatedUser;
    } catch (error) {
        console.error("Error updating user:", error);
    }
};
/**
 * 
 * @param user 
 */
const deleteUser = async (id:number) => {
    try {
        return await userRepository.delete({id:id})
    } catch (error) {
        console.log(error)
    }
}

export {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}