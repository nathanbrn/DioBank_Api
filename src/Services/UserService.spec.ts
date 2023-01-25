import { UserProps, UserService } from "./UserService";

describe("UserSerevice", () => {
    const mockDb: UserProps[] = [] 
    const { createUser, getAllUsers } = new UserService(mockDb);

    it("Deve criar um novo usuário", () => {
        const mockConsole = jest.spyOn(global.console, "log");
        createUser("Breno", "breno@gmail.com");
        expect(mockConsole).toHaveBeenCalledWith("Update db: ", mockDb);
    });
});