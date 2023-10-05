import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './types';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    register(createUserDTO: CreateUserDTO): Promise<import("./user.entity").User>;
    login(loginDTO: {
        email: string;
        password: string;
    }): Promise<{
        success: boolean;
        message: string;
        user?: undefined;
    } | {
        success: boolean;
        user: import("./user.entity").User;
        message?: undefined;
    }>;
    paginateUsers(page?: number, limit?: number): Promise<import("./user.entity").User[]>;
    getUserById(id: number): Promise<import("./user.entity").User>;
    resetPassword(email: string): Promise<void>;
    getAllUsers(): Promise<User[]>;
    editUser(id: number, createUserDTO: CreateUserDTO): Promise<import("./user.entity").User>;
    filterUser(params: any): Promise<User[]>;
    paginateUser(page: number, limit: number): Promise<User[]>;
    deleteUser(id: number): Promise<void>;
}
