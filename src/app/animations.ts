import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';


let fadeReusable = trigger('fadeReusable', [ // proizvoljan naziv trigera
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
]);

/* style nacin
let slide = trigger('slide', [
  state('void', style({opacity: 1, transform: 'translateX(100%)'})),
  transition(':enter, :leave', [
    animate('1000ms 200ms cubic-bezier(.07,1.32,.22,-0.27)') // duljina, delay, easing
  ])
]);*/

// keyframe nacin
// https://github.com/daneden/animate.css/blob/master/source/bouncing_entrances/bounceInLeft.css
// https://github.com/daneden/animate.css/blob/master/source/bouncing_exits/bounceOutLeft.css
/*
offset - pozicija od pocetka
transform - pomicanje elementa
*/
let slide = trigger('slide', [
  transition(':enter', [
    animate('500ms 0ms ease-in', keyframes([
      style({offset: 0, opacity: 0, transform: 'translate3d(-100%, 0, 0)' }), // pocetak
      style({offset: 0.6, opacity: 1, transform: 'translate3d(25px, 0, 0)' }),
      style({offset: 0.75, transform: 'translate3d(-10px, 0, 0)' }),
      style({offset: 0.9, transform: 'translate3d(5px, 0, 0)' }),
      style({offset: 1, transform: 'translate3d(0, 0, 0)' })  // kraj animacije
    ]))
  ]),
  transition(':leave', [
    animate('500ms 100ms ease-out', keyframes([
      style({offset: 0.2, opacity: 1, transform: 'translate3d(50px, 0, 0)' }), // pocetak animacije
      style({offset: 1, opacity: 0, transform: 'translate3d(-100%, 0, 0)' })  // kraj animacije
    ]))
  ])
]);

export { fadeReusable, slide };
