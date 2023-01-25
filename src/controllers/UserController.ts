import { UserService } from './../Services/UserService';
import { Request, Response } from "express";



export class UserController {
    userService: UserService;

    constructor( userService = new UserService ) {
        this.userService = userService;
    }


    createUser = (request: Request, response: Response) => {
        const user = request.body;

        if(!user.name) {
            return response.status(400).json({ message: "Name is required" });
        } else if (!user.email) {
            return response.status(400).json({ message: "Email is required" });
        }

        this.userService.createUser(user.name, user.email);
        return response.status(201).json({ message: "User created" });
    }

    getAllUsers = (request: Request, response: Response) => {
        const users = this.userService.getAllUsers();

        return response.status(200).json(users);
    }

    deleteUser = (request: Request, response: Response) => {
        const user = request.body;
        
        return response.status(200).json({ message: 'Usuário deletado' });
    }
}