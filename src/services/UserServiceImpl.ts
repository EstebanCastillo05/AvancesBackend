import { User } from "../models/User";
import { UserRepository } from "../repositories/UserRepository";
import { UserServices } from "./UserService";

export class UserServiceImpl implements UserServices {

    private userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.findALL();
    }

    async findById(id: number): Promise<User | null > {
        return await this.userRepository.findById(id);
    }

    async findByIdRequestParams(id: number): Promise<User | null > {
        return await this.userRepository.findById(id);
    }

    async validarLogin(username: string, password: string): Promise<User | null> {
        return await this.userRepository.validarLoginn(username, password);
    }

    async create(userData: Partial<User>): Promise<User> {
        return await this.userRepository.create(userData);
    }
    async update(id: number, userData: Partial<User>): Promise<User | null> {
        const updatedRow = await this.userRepository.update(id, userData);
        if (updatedRow[0] === 0)  return null;  
        return await this.findById(id); 
    }
    async delete(id: number): Promise<boolean> {
        const deletedRow = await this.userRepository.delete(id);
        return deletedRow > 0; 
    }
} 