
import {Injectable} from '@angular/core';
import {User} from '../models/user';


@Injectable({
    providedIn: 'root'
  })
export class UserProvider{

    usersAuthorized: User[] =[];
  
    constructor(){
     this.usersAuthorized.push(new User("HUGO","pierre","lookat@gmail.com","lookat"));
     this.usersAuthorized.push(new User("HUGO2","pierre2","lookat23@gmail.com","lookat45"));
     this.usersAuthorized.push(new User("HUGO3","pierre3","lookat45@gmail.com","lookat23"));
    }

    public  login(email:string,password:string):User {

     let loginUser = this.usersAuthorized.filter(user=>user.email === email && user.password ===password);

     if(loginUser.length >=1 ){
         return loginUser[0];
     }
     
     return null;

    }

}