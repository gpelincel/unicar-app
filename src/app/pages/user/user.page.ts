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
  IonInput,
  IonLabel,
  IonButton,
  IonSelect,
  IonSelectOption,
} from '@ionic/angular/standalone';
import {
  calendarOutline,
  carSportOutline,
  closeOutline,
  lockClosedOutline,
  mailOutline,
  personOutline,
  schoolOutline,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { RealtimeDatabaseService } from 'src/app/services/firebase/realtime-database/realtime-database.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
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
    IonInput,
    IonFab,
    IonFabButton,
    IonIcon,
    IonLabel,
    IonButton,
    IonSelect,
    IonSelectOption,
  ],
})
export class UserPage implements OnInit {
  user: any = {};

  constructor(private firebaseService: RealtimeDatabaseService) {
    addIcons({
      personOutline,
      calendarOutline,
      schoolOutline,
      mailOutline,
      lockClosedOutline,
      carSportOutline
    });
  }

  onSubmit() {
    this.firebaseService.salvarUser(this.user);
  }

  ngOnInit() {}
}
