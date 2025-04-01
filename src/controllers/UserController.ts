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

    async create(req: Request, res: Response) {
        try {
            const newUser = await this.userService.create(req.body);
            res.status(201).json(newUser); 
        } catch (error) {
            res.status(500).json({ message: 'Error creando el usuario' });
        }
    }


    async update(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            const updatedUser = await this.userService.update(id, req.body);

            if (!updatedUser) {
                res.status(404).json({ message: 'Usuario no encontrado' });
            }

            res.json(updatedUser); 
        } catch (error) {
            res.status(500).json({ message: 'Error actualizando el usuario' });
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            const isdeleted = await this.userService.delete(id);

            if (!isdeleted) {
                res.status(404).json({ message: 'Usuario no encontrado' });
            }

            res.json({ message: 'Usuario eliminado correctamente' }); 
        } catch (error) {
            res.status(500).json({ message: 'Error eliminando el usuario', error });
        }
    }


    async login(req: Request, res: Response) {
        console.log('login');
        try {
            const { username, password } = req.body; 

            const user = await this.userService.validarLogin(username as string, password as string);
    
            if (!user) {
                res.status(401).json({ message: "Login fallido" });
                return;
            }
            res.status(200).json({ message: "Login exitoso" });
        } catch (error) {
            res.status(500).json({ message: 'Error en el servidor' });
        }
    }
    

}