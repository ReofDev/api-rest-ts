
type gender = "male" | "female"
type isActive = 1 | 0 

export interface UserInterfaz {
    firstName: string
    lastName: string
    email?: string
    password?: string
    confirmPassword?: string
    gender?: gender
    phone?: string
    address?: string
    isActive?: isActive
}
