import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonFab,
  IonIcon,
  IonFabButton,
  IonLabel
} from '@ionic/angular/standalone';
import { CardUserComponent } from 'src/app/components/card-user/card-user.component';
import { addIcons } from 'ionicons';
import { add, carSportOutline, createOutline, optionsOutline, personOutline, exitOutline } from 'ionicons/icons';
import { RealtimeDatabaseService } from 'src/app/services/firebase/realtime-database/realtime-database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonList,
    IonItem,
    CardUserComponent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonLabel
  ],
})
export class ConfiguracoesPage implements OnInit {
  users:any = [];
  constructor(private databaseService: RealtimeDatabaseService, private router: Router) {
    addIcons({ add, optionsOutline, carSportOutline, personOutline, createOutline, exitOutline })
  }

  async ngOnInit() {
    this.users = await this.databaseService.getUsers();
    console.log(this.users);
  }

  logOut(){
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
