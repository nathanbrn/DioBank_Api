import { UserController } from './UserController';
import { UserService } from "../Services/UserService";
import { makeMockResponse } from '../__mocks__/mockResponse.mock';
import { Request } from 'express';

describe("UserController", () => {
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn()
    }
    const userController = new UserController(mockUserService as UserService);

    it("Deve criar um novo usuário", () => {
        const mockRequest = {
            body: {
                name: "Breno",
                email: "breno@test.com"
            }
        } as Request;
        const mockResponse = makeMockResponse();
        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(201);
        expect(mockResponse.state.json).toMatchObject({ message: "User created" });
    });

    it("Deve apresentar um erro caso o usuário não digite o nome", () => {
        const mockRequest = {
            body: {
                email: "breno@gmail.com"
            }
        } as Request;
        const mockResponse = makeMockResponse();
        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({ message: "Name is required" });
    });

    it("Deve apresentar um erro caso o usuário não digite o email", () => {
        const mockRequest = {
            body: {
                name: "Breno"
            }
        } as Request;
        const mockResponse = makeMockResponse();
        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({ message: "Email is required" });
    });

    it("Deve verificar se a função getAllUsers está sendo chamada", () => {
        const mockRequest = {
            body: {
                name: "Breno",
                email: "breno@gmail.com"
            }
        } as Request;
        const mockResponse = makeMockResponse();
        userController.getAllUsers(mockRequest, mockResponse);
        expect(mockResponse.state.json).toHaveBeenCalled();
    });

    it("Deve verificar se o usuário foi deletado", () => {
        const mockRequest = {
            body: {
                name: "Breno"
            }
        } as Request;
        const mockResponse = makeMockResponse();
        userController.deleteUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toMatchObject({ message: "Usuário deletado" });
    });
});