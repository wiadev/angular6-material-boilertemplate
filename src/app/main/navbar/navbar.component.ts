import { Component, OnInit, Input  } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() sidenav: MatSidenav;

  constructor() { }

  ngOnInit() {
  }

  openSideNav() {
    this.sidenav.open();
  }

}
