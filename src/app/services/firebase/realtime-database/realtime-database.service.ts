import { Injectable } from '@angular/core';
import { child, get, getDatabase, ref, set } from 'firebase/database';
import {app} from 'firebase.config';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RealtimeDatabaseService {
  database = getDatabase();

  constructor(private router: Router) {}

  async salvarUser(user: any) {
    let users = await this.getUsers();
    let id = Number(users.length)+1;

    const db = getDatabase(app);

    user.id = id;

    set(ref(db, 'users/' + id), user);

    this.router.navigate(['/tabs/tabs/motoristas']);
  }

  async getUsers() {
    const dbRef = ref(getDatabase(app));
    return get(child(dbRef, `users/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          return snapshot.val();
        } else {
          console.log('No data available');
          return [];
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async getUser(id_user:any){
    const dbRef = ref(getDatabase(app));
    return get(child(dbRef, `users/${id_user}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          return snapshot.val();
        } else {
          console.log('No data available');
          return [];
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async login(user_login:any){
    let users = await this.getUsers();

    let auth = users.filter((user:any) => user.email == user_login.email && user.password == user_login.password );

    console.log(auth);

    if (auth.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  async getMotoristas(){
    let users = await this.getUsers();

    return users.filter((user:any) => user.is_motorista == "1");
  }

  async getPassageiros(){
    let users = await this.getUsers();
    return users.filter((user:any) => user.is_passageiro == "1");
  }
}
