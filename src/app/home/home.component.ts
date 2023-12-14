import { style, transition, trigger, animate } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slidein', [
      transition(':enter', [
        // when ngif has true
        style({ transform: 'translateX(-100%)' }),
        animate(250, style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        // when ngIf has false
        animate(250, style({ transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  isCollapsed: boolean = true;

  @Input() item!: boolean;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    console.log('Flag check in parent =', this.item);
  }
  showDiv: boolean = true;

  hideDiv(flag: boolean) {
    // Set the showDiv variable based on the flag value
    this.showDiv = flag;
  }
  // @Output() flagChanged = new EventEmitter<boolean>();
  toggle() {
    // If collapse is true, expand is false and vice versa

    this.isCollapsed = !this.isCollapsed;
  }
  openNav() {
    const sideNavElement = this.el.nativeElement.querySelector('#mySidenav');
    if (sideNavElement) {
      this.renderer.setStyle(sideNavElement, 'width', '250px');
    }
  }

  closeNav() {
    const sideNavElement = this.el.nativeElement.querySelector('#mySidenav');
    if (sideNavElement) {
      this.renderer.setStyle(sideNavElement, 'width', '0');
    }
  }
}
