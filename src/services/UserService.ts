import { User } from "../models/User";

export interface UserServices {
    
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
    validarLogin(username: string, password: string): Promise<User | null>;
        //estructura para captura

    create(userData: Partial<User>): Promise<User>; 
    update(id: number, userData: Partial<User>): Promise<User | null>;
    delete(id: number): Promise<boolean>;
   
}