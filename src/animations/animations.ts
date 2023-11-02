import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  state('void', style({ opacity: 0 })),
  transition(':enter, :leave', [animate('0.5s')]),
]);
export const typingAnimation = trigger('typingAnimation', [
  state('visible', style({ transform: 'translateY(0)', opacity: 1 })),
  state('hidden', style({ transform: 'translateY(-5px)', opacity: 0 })),
  transition('visible => hidden', animate('1.5s ease-in')),
  transition('hidden => visible', animate('1.5s ease-out')),
]);
