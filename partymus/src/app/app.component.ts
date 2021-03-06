import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})

export class AppComponent {

    loginbtn:boolean;
    logoutbtn:boolean;
    token:any;

    constructor(private dataService: ApiService, private router: Router) {

        dataService.getLoggedInName.subscribe(name => this.changeName(name));
        if(this.dataService.isLoggedIn()){
            console.log("loggedin");
            this.loginbtn=false;
            this.logoutbtn=true;
        }else{
            this.loginbtn=true;
            this.logoutbtn=false;
        }
        this.token = this.dataService.getToken();
        
    }

    private changeName(name: boolean): void {
        this.logoutbtn = name;
        this.loginbtn = !name;
    }

    async logout(){
        this.dataService.deleteToken();
        window.location.href = window.location.href;
        this.router.navigateByUrl('main');
    }

    
}
