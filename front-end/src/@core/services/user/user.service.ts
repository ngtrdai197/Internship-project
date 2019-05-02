import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from 'src/@core/config/API';
import { IUser } from 'src/@core/interface/IUser.interface';

@Injectable({ providedIn: "root" })
export class UserService {

  constructor(private http: HttpClient) { }

  onSignIn(user: any): Observable<any> {
    return this.http.post(`${API.HOST}/auth/token`, user);
  }

  onFetchUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>(`${API.HOST}/users/api`);
  }

}
