import { Component  } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { fadeReusable, slide } from 'app/animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('fade', [ // proizvoljan naziv trigera
      state('void', style({opacity: 0})), // tu definiras state pa ne moras pisati u transition metodi

      transition(':enter, :leave', animate(2000)) // transition('void => *, * => void', [animate(2000)]) //koristis aliase enter i leave
      // transition('void <=> *', [animate(2000)]) // transition('void => *, * => void', [animate(2000)]) // pises bidirectional

      /* ne ovako pisati ako ne moras

      transition('void => *', [ // iz nevidljivog u vidljivo(target state)
        // style({ opacity: 0 }), // style({ backgroundColor: 'yellow', opacity: 0 }),
        animate(2000) // animate(2000, style({ backgroudColor: 'blue', opacity: 1 })) // ne moras pisati style
      ]),
      transition('* => void', [
        // style({opacity: 1}), //angular sam predpostavi da je pocetno opacity 1
        animate(1000) // animate(1000, style({opacity: 0}))
      ])*/
    ]),
    fadeReusable,
    slide
  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
