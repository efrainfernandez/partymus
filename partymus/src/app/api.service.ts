import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({
providedIn: 'root'
})

export class ApiService {

//https://fahmidasclassroom.com/register-and-login-system-using-angular-8-php-and-mysql/
//https://www.youtube.com/watch?v=m5ZNGM7VKwg
//https://www.youtube.com/watch?v=o3T7k2k4Ap8

    redirectUrl: string | undefined;
    baseUrl:string = "http://localhost/partymus/users";
    //baseUrl:string = "http://localhost/prueba";

    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

    constructor(private httpClient : HttpClient) { }
    
    userlogin(username: any, password: any) {
        alert(username)
        return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
            .pipe(map(Users => {
                this.setToken(Users[0].name);
                this.getLoggedInName.emit(true);
                return Users;
            }));
    }

    public userregistration(name: any,email: any,password: any) {
        return this.httpClient.post<any>(this.baseUrl + '/register.php', { name,email, password })
            .pipe(map(Users => {
                return Users;
            }));
    }

    //token
    setToken(token: string) {
        localStorage.setItem('token', token);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    deleteToken() {
        localStorage.removeItem('token');
    }

    isLoggedIn() {
        const usertoken = this.getToken();
        if (usertoken != null) {
            return true;
        }
        return false;
    }
}