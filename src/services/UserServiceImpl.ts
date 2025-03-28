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
} 