import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
  }
  active: string = 'Home';
  toggle: boolean = false;

  navLinks = [
    {
      id: 'home',
      title: 'Home',
    },
    {
      id: 'about',
      title: 'About',
    },
    {
      id: 'services',
      title: 'Services',
    },
    {
      id: 'reviews',
      title: 'Reviews',
    },
    {
      id: 'contact',
      title: 'Contact',
    },
  ];

  setActive(navTitle: string): void {
    this.active = navTitle;
  }

  toggleMenu(): void {
    this.toggle = !this.toggle;
  }
}
