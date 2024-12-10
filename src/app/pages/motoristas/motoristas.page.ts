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
  users: any[] = [];
  isModalOpen = false;
  is_mesma = false;
  distancia: number = 0;

  constructor(private databaseService: RealtimeDatabaseService) {
    addIcons({optionsOutline});
  }

  onWillDismiss(event: Event): void {}

  async ngOnInit() {
    this.users = await this.databaseService.getMotoristas();
    console.log('Usuários carregados:', this.users);
  }

  openModal() {
    this.isModalOpen = true;
  }

  filtrarPorFaculdade(faculdade: string): any[] {
    const faculdadeNormalizada = faculdade.toLowerCase();
    return this.users.filter(
      (user: any) =>
        user?.faculdade?.toLowerCase() === faculdadeNormalizada
    );
  }

  filtrarPorDistancia(usuarios: any[], distanciaMaxima: number): any[] {
    return usuarios.filter(
      (usuario: any) =>
        usuario?.distancia !== null &&
        usuario?.distancia <= distanciaMaxima
    );
  }

  filtrar() {
    let usuariosFiltrados = [...this.users]; // Copiar lista original

    if (this.is_mesma) {
      usuariosFiltrados = this.filtrarPorFaculdade('Facens');
    }

    if (this.distancia > 0) {
      usuariosFiltrados = this.filtrarPorDistancia(usuariosFiltrados, this.distancia);
    }

    console.log('Usuários filtrados:', usuariosFiltrados);
    this.users = usuariosFiltrados;
    this.isModalOpen = false;
  }

  cancel() {
    this.isModalOpen = false;
    this.ngOnInit();
  }
}
