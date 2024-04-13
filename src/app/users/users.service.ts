import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }
  register(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/register", user);
  }
  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }
  /*getUser() {
    return this.http.get("https://reqres.in/api/users/2");
  }*/

  getUserLogged(): Observable<any> |null{
    const token = this.getToken();
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get("https://reqres.in/api/users/2", { headers });
    } else {
      return null; // O manejar el caso en que no haya token almacenado
    }
  }

 /* getUserLogged() {
  const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
  }*/
}
