import { Injectable } from '@angular/core';
import { child, get, getDatabase, ref, set } from 'firebase/database';
import {app} from 'firebase.config';

@Injectable({
  providedIn: 'root',
})
export class RealtimeDatabaseService {
  database = getDatabase();

  constructor() {}

  salvarUser(user: any) {
    const db = getDatabase(app);
    set(ref(db, 'users/' + 0), user);
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

  async getMotoristas(){
    let users = await this.getUsers();

    return users.filter((user:any) => user.is_motorista == "1");
  }

  async getPassageiros(){
    let users = await this.getUsers();
    return users.filter((user:any) => user.is_passageiro == "1");
  }

}
