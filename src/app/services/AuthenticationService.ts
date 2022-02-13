import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../models/user.model";
import { UsersService } from "./UsersService";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private currentUser$: BehaviorSubject<User>;
    // public currentUser: User;

    constructor(private http: HttpClient,
        private usersService: UsersService) {

        let userObject;
        // let userJson = <User>{ username: '', password: '', email: '' };
        if (localStorage.getItem('currentUser')) {
            userObject = JSON.parse(localStorage.getItem('currentUser') || '');
        }
        // else {
        //     userObject = <User>{};

        // }

        this.currentUser$ = new BehaviorSubject<User>(userObject);
        // this.currentUser = this.currentUserSubject.asObservable();
    }
    public get currentUserValue(): User {
        return this.currentUser$.value;
    }
    login(username: string, password: string) {

        if (this.currentUserValue && this.currentUserValue.username == username
            && this.currentUserValue.password == password)
            return true;

        return false;
    }
    logout() {
        localStorage.removeItem('currentUser');
    }
    register(user: User) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
    }
}