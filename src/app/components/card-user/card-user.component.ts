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
  @Input() user: any;
  idade: any;
  convertBrazilianDateToDate(brazilianDate: string): Date | null {
    const dateParts = brazilianDate.split('/');

    // Verificar se a data está no formato esperado
    if (dateParts.length !== 3) {
      console.error('Formato de data inválido. Use "dd/mm/yyyy".');
      return null;
    }

    const day = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1; // Meses começam em 0 no JavaScript
    const year = parseInt(dateParts[2], 10);

    // Validação básica da data
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      console.error('A data contém valores inválidos.');
      return null;
    }

    // Criar objeto Date
    const date = new Date(year, month, day);

    // Validar se a data é real (por exemplo, evitar 31 de fevereiro)
    if (
      date.getDate() !== day ||
      date.getMonth() !== month ||
      date.getFullYear() !== year
    ) {
      console.error('A data fornecida não é válida.');
      return null;
    }

    return date;
  }

  getYearDifference(date: Date): number {
    const now = new Date();

    const yearNow = now.getFullYear();
    const monthNow = now.getMonth();
    const dayNow = now.getDate();

    const yearInput = date.getFullYear();
    const monthInput = date.getMonth();
    const dayInput = date.getDate();

    // Calcula a diferença inicial de anos
    let yearDifference = yearNow - yearInput;

    // Ajusta se o aniversário ainda não foi atingido no ano atual
    if (
      monthNow < monthInput ||
      (monthNow === monthInput && dayNow < dayInput)
    ) {
      yearDifference--;
    }

    return yearDifference;
  }

  constructor() {}

  ngOnInit() {
    this.user.data_nascimento = this.convertBrazilianDateToDate(this.user.data_nascimento);

    this.idade = this.getYearDifference(this.user.data_nascimento);
  }
}
