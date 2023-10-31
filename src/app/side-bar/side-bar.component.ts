import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  isCollapsed: boolean = true;
  expand: boolean = true;
  collapse: boolean = true;
  toggle() {
    // If collapse is true, expand is false and vice versa

    this.isCollapsed = !this.isCollapsed;
  }
}
