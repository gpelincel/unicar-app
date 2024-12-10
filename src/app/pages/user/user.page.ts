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
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

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
    RouterLink
  ],
})
export class UserPage implements OnInit {
  user: any = {};
  id: any;

  constructor(private firebaseService: RealtimeDatabaseService, private route: ActivatedRoute) {
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

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log('ID atualizado:', this.id);
    });

    
    if (this.id) {
      this.firebaseService.getUser(Number(this.id)-1).then((user) => {
        this.user = user;
        this.user.is_passageiro = this.user.is_passageiro ? "Sim" : "Não";
        this.user.is_motorista = this.user.is_motorista ? "Sim" : "Não";
      });
    }
  }
}
