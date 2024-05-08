import { Injectable } from "@nestjs/common";

const user=[
    {
        name:'lucas',
        email:'lucas@gmail.com',
        
    }
]
@Injectable()
export class UserRepository{

    getAllUsers(){
        return user.find((e)=>e)
        
    }
}
