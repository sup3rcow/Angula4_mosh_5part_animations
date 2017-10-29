import { trigger, useAnimation, transition, state, style, animate } from '@angular/animations';

export const expandCollapse = trigger('expandCollapse', [
    state('skupljeno', style({
      height: 0,
      paddingTop: 0, // jer je u css-u(zippy-body) definiran padding
      paddingBottom: 0,
      opacity: 0
    })),

    /* bolje razdvoji u multistep animation
    // ne moras pisati ovo, jer agular sam skuzi da napravi undo prvog state-a, ne moras mu posebno pisati,
    state('rasireno', style({
      height: '*', // u ovisnosti od contenta unutar zippy-a angular odredi visinu
      paddingTop: '*' // vratis padding iz css-a
      paddingBottom: '*' // vratis padding iz css-a
      opacity: 0
    })),*/
    transition('skupljeno => rasireno', [
      animate('300ms ease-out', style({height: '*', paddingTop: '*', paddingBottom: '*'})), // prikazes box
      animate('1000ms', style({opacity: 1})) // pa prikazes text
    ]),
    transition('rasireno => skupljeno', animate('300ms ease-in'))
  ])