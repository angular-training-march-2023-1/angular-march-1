import { Injectable } from '@angular/core';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// the purpose of this service is to manipulate the jwt token with the sesionStorage

// in addition to this we will use AuthService to check if a user has logged in or not
isLoggedIn: boolean = false;

  constructor() { }

  storeToken(user: User): void{
    sessionStorage.setItem("userInfo", JSON.stringify(user));
  }

  removeToken(){
    sessionStorage.removeItem("userInfo");
  }

  fetchToken(): User{
    let userInfoString = sessionStorage.getItem("userInfo");
    let userInfo;
    if(userInfoString!=null){
      userInfo = JSON.parse(userInfoString);
    }
    return userInfo;
  }
}
