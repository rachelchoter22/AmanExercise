import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user.model";

@Injectable({ providedIn: 'root' })
export class UsersService {
    usersFileUrl: string = 'assets/users.json';
    userList: User[] = [];
    constructor(private http: HttpClient) { }

    
    getUsers(): User[] {
        this.http.get<User[]>(this.usersFileUrl).
            subscribe(res => {
                this.userList = res;
            });
        return this.userList;

    }




    async setUsers(user: User) {
        let users = await this.getUsers();


        // let xd = users.map(x => <User>{
        //     id: x.id,
        //     password: x.password,
        //     token: x.token,
        //     username: x.username
        // });

        users.push()
    }
}