import { User } from './user.entity';
import { CreateUserDTO } from './dto/create-user.dto';
import { Repository } from 'typeorm';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    register(createUserDto: CreateUserDTO): Promise<User>;
    calculateAge(dateOfBirth: Date): number;
    login(email: string, password: string): Promise<User | null>;
    resetPassword(email: string): Promise<void>;
    deleteUser(userId: number): Promise<void>;
    editUser(userId: number, createUserDto: CreateUserDTO): Promise<User>;
    searchUser(query: string): Promise<User[]>;
    filterUser(params: any): Promise<User[]>;
    paginateUser(page: number, limit: number): Promise<User[]>;
    getUser(userId: number): Promise<User | null>;
    getAllUsers(): Promise<User[]>;
}
