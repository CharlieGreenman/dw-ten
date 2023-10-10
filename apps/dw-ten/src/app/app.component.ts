import { Component } from '@angular/core';

@Component({
  selector: 'dw-ten-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'dw-ten';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
