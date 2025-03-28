import { Request, Response } from "express";
import { UserServices } from "../services/UserService";
import { User } from "../models/User";
import { UserServiceImpl } from "../services/UserServiceImpl";

export class UserController {

    private userService: UserServices;
    constructor() {
        this.userService = new UserServiceImpl;

    }

    async findAll(req: Request, res: Response) {
        try {
            const users: User[] = await this.userService.findAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Usuarios no encontrados' });
        }
    }

    async findById(req: Request, res: Response) {
        console.log("findById");
        try {
            const user: User | null = await this.userService.findById(Number(req.params.id));
            if (user == null) {
                res.status(404).json({ message: 'Usuario no encontrado' });
                return;
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Usuario no encontrados' });
        }
    }

    async findByIdRequestParams(req: Request, res: Response) {
        console.log("findByIdRequestParams");
        try {
            const user: User | null = await this.userService.findById(Number(req.query.id));
            if (user == null) {
                res.status(404).json({ message: 'Usuario no encontrado' });
                return;
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Usuario no encontrados' });
        }
    }

    async login(req: Request, res: Response) { 
        console.log('login');
        try {
            const {username, password}=req.query; 
            const user = await this.userService.validarLogin(username as string, password as string);

            if (!user) {
                res.status(401).json({ message: "Login fallido"});
                return;
            }

            res.status(200).json({ message: "Login exitoso" }); 
        }catch (error) {
            res.status(500).json({ message: 'Error en el servidor' });
            
        }
    }

}