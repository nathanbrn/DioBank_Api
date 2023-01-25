export interface UserProps {
    name: string
    email: string
}

const db: any = [
    {
        name: "Breno",
        email: "breno@test.com"
    }
]

export class UserService {
    db: UserProps[];

    constructor( database = db) {
        this.db = database;
    }

    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }

        this.db.push(user);
        console.log("Update db: ", this.db);
    }

    getAllUsers = () => {
        return db;
    }

    deleteUser = (name: string) => {
        const user = this.db.find((user: UserProps) => user.name === name);

        if(!user) {
            console.log("User not found");
        }

        return user;
    }

}