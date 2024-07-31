import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    this.handleScroll();
  }
  active: string = 'Home'; // default active link
  toggle: boolean = false; // toggle for mobile menu
  scrolled: boolean = false; // bool for scroll event

  // links
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

  // set active link
  setActive(navTitle: string): void {
    this.active = navTitle;
  }

  // toggle mobile menu
  toggleMenu(): void {
    this.toggle = !this.toggle;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.handleScroll();
  }

  // function to check scroll event and change navbar style
  private handleScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > 100) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }
}
