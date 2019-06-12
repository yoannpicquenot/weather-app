import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private users = [{
    listeVilleFavortie: [
      'Lyon',
      'Marseille',
      'Dijon'

    ],
    login: 'aa@aa.aa',
    password: 'aa'
  }, {
    listeVilleFavortie: [
      'Lyon',
      'Rennes',
      'Paris',
      'Lille',
      'Nantes',
      'Bordeaux'

    ],
    login: 'bb@bb.bb',
    password: 'bb'
  }, {
    listeVilleFavortie: [
      'Strasbourg',
      'Mertz',
      'Nancy',
      'Amiens',
      'Bourges',
      'Tours'

    ],
    login: 'cc@cc.cc',
    password: 'cc'
  }];

  getUser(login: string, password: string) {
    return this.users.find(user => user.login === login && user.password === password);
  }
}
