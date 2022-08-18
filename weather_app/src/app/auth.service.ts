import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { USERS } from './auth_config';

@Injectable()
export class AuthService {

  private isloggedIn: boolean;
  private userName!: string;

  constructor(private router: Router) {
    this.isloggedIn = localStorage.getItem("isloggedIn") === "true";
  }

  login(username: string, password: string) {
    if(this.doesUserExist(username, password)){
      localStorage.setItem("isloggedIn", "true");
      this.userName = username;
    }
    return of(this.isloggedIn);
  }

  doesUserExist(username: string, password: string): boolean {
    return undefined !== USERS.find(user => user.username === username && user.password === password);
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem("isloggedIn") === "true";
  }

  logoutUser(): void {
    localStorage.setItem("isloggedIn", "false");
    this.router.navigate(["login"]);
  }



} 