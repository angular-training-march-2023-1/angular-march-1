import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserHttpService } from 'src/app/services/user-http.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string='';
  allUsers: User[] = [];
  constructor(private userHttpService: UserHttpService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(myForm: NgForm){
    // 1. construct a User object and assign form data
    let loginUser: User = {
      uName: myForm.value.uName,
      uPassword: myForm.value.uPassword,
      token: ''
    }

    // 2. next fetch all the users from the backend application and validate the username and password
    this.userHttpService.fetchAllUsers().subscribe({
      next: (response)=>{
        console.log(response);
        this.allUsers = response;
        // now validate loginUser against allUsers array
        let filteredUser: User[] = this.allUsers.filter((eachUser)=>{
                      return (eachUser.uName==loginUser.uName && eachUser.uPassword==loginUser.uPassword)
                      });
        if(filteredUser.length==1){
          // means login is susccess
          this.authService.isLoggedIn = true;
          filteredUser[0].uPassword='';
          this.authService.storeToken(filteredUser[0]);
          this.router.navigate(['student-list-http']);

        }else{
          // login failed
          this.errorMessage = "Invalid Username/Password";

        }
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }
}
