import { Component, Input } from '@angular/core';
import { trigger, useAnimation, transition, state, style, animate } from '@angular/animations';
import { fadeInAnimation, bounceOutLeftAnimation } from 'app/animations';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('skupljeno', style({
        height: 0,
        paddingTop: 0, // jer je u css-u(zippy-body) definiran padding
        paddingBottom: 0,
        overflow: 'hidden'
      })),

      // ne moras pisati ovo, jer agular sam skuzi da napravi undo prvog state-a, ne moras mu posebno pisati
      state('rasireno', style({
        height: '*', // u ovisnosti od contenta unutar zippy-a angular odredi visinu
        padding: '*', // vratis padding iz css-a
        overflow: 'auto'
      })),
      transition('skupljeno => rasireno', useAnimation(fadeInAnimation, {params: {duration: '500ms'}})),
      transition('rasireno => skupljeno', animate('300ms ease-in'))
    ]),
  ]
})
export class ZippyComponent  {
  @Input('title') title: string;
  isExpanded: boolean;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
