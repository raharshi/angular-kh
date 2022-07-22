import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showHeader: boolean = false;
  constructor() {

  }
  title = 'angular-kh';
  header: HeaderComponent = new HeaderComponent();

  toggleHeader() {
    this.showHeader = !this.showHeader;
  }
}
