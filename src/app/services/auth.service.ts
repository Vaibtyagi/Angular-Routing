import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setToken(token: string):void{
    localStorage.setItem('token', token)
  }
  getToken():string | null{
    return localStorage.getItem('token')
  }
  isLogged(){
    return this.getToken() !== null
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    if (email === 'admin@gmail.com' && password === 'admin12') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Vaibhav', email: 'admin@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }

}
