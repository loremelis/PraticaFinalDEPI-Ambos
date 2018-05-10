import { User } from "../models/user.models"; 
export class UserService{
    private users: User []= [{"nombre":"Lorenzo","apellido":"Melis","nacimiento":"21/06/1992",
    "nacionalidad":"Italia","rol":"Enfermero","correo":""}];
    
    constructor(){ 

    }

    addUser(value: User){ 
        this.users.push(value);
    }

    getUsers(){
    return this.users;
    } 
}