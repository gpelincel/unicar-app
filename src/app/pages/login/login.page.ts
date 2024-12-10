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
  IonIcon,
  IonInput,
  IonButton
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { lockClosedOutline, mailOutline, triangle } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
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
    IonIcon,
    IonInput,
    IonIcon,
    IonButton,
    RouterLink
  ],
})
export class LoginPage implements OnInit {
  constructor() {
    addIcons({ mailOutline, lockClosedOutline});
  }

  ngOnInit() {
    localStorage.setItem("CEP", "18550-370");
  }
}
