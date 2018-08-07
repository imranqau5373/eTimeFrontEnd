import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { HttpApiService} from '../shared/services/http-api.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(private _httpService: HttpApiService, public router: Router) {
        debugger;
    }
    userName: string = "";
    status: string = "";

    ngOnInit() {}

    onLoggedin() {
        debugger;
        this._httpService.anonymousPost("api/Account/login" , {
            UserName : this.userName
        }).subscribe(result => {
            debugger;
            localStorage.setItem('loggedInUserId', result.UserId);
            localStorage.setItem('loggedInUserName', result.UserName);
            this.router.navigate(['/e-time/time']);
        }, error => {
            debugger;
            this.status = "Invalid User Name";
            console.error(error.text());
        });        
    }
}
