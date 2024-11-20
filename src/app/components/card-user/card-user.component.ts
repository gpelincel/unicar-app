import { Component, Input, OnInit } from '@angular/core';
import {
  IonList,
  IonCard,
  IonChip,
  IonCardHeader,
  IonCardContent,
  IonItem,
  IonLabel,
  IonCardTitle,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss'],
  standalone: true,
  imports: [
    IonList,
    IonCard,
    IonCard,
    IonChip,
    IonCardContent,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonItem,
    IonLabel,
  ],
})
export class CardUserComponent implements OnInit {

  @Input() user:any;

  constructor() {}

  ngOnInit() {}
}
