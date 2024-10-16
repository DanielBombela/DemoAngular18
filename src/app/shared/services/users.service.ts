import { Injectable, computed, inject, signal } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { environment } from "../../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { authStatus } from "../../core/models/auth-status.enum";
import { map, tap } from "rxjs";
import { AuthResponse, User } from "../../core/models/authResponse";



@Injectable({providedIn:'root'})
export class UserService{
private readonly baseUrl:string = environment.baseUrl;
private http = inject(HttpClient);

private _currentUser = signal<User | null>(null);
private _authStatus = signal<authStatus>(authStatus.checking);

public currentUser = computed(() => this._currentUser);
public authStatus = computed(() => this._authStatus);
constructor(){

}

login(username:string, password:string){

    const body ={
           username,
            password
    }

    return this.http.post<AuthResponse>(`${this.baseUrl}/staff/authentication/login/`, body).pipe(
        tap((res:AuthResponse)=>{
            this._currentUser.set(res.data.user);
            this._authStatus.set(authStatus.authenticated);
            localStorage.setItem('token',res.data.access_token);
            localStorage.setItem('user',JSON.stringify(res.data.user));
                console.log(res.data.user);
                console.log("*****");
                
        }),
        map((res:AuthResponse)=>res)
    )
}

}