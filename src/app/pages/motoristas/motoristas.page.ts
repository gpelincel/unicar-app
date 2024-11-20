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
  IonFabButton
} from '@ionic/angular/standalone';
import { CardUserComponent } from 'src/app/components/card-user/card-user.component';
import { addIcons } from 'ionicons';
import { add, optionsOutline } from 'ionicons/icons';
import { RealtimeDatabaseService } from 'src/app/services/firebase/realtime-database/realtime-database.service';

@Component({
  selector: 'app-motoristas',
  templateUrl: './motoristas.page.html',
  styleUrls: ['./motoristas.page.scss'],
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
    IonIcon
  ],
})
export class MotoristasPage implements OnInit {
  users:any = [];
  constructor(private databaseService: RealtimeDatabaseService) {
    addIcons({ add, optionsOutline })
  }

  async ngOnInit() {
    this.users = await this.databaseService.getMotoristas();
    console.log(this.users);
  }
}
