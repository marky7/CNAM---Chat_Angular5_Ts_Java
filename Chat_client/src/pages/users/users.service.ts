import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {

  configUrl = 'https://raw.githubusercontent.com/marky7/GlobalGameJam_2017/master/package.json';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.configUrl);
  }

}
