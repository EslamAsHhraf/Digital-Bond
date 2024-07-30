import {
  Component,
  OnInit,
  ElementRef,
  HostListener,
  AfterViewInit,
} from '@angular/core';
import { FeatureCard } from 'src/app/models/feature-card';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  features: FeatureCard[] = [
    {
      icon: 'assets/Star.svg',
      title: 'Rewards',
      content:
        'Experience top-notch digital solutions with enticing promotions.',
    },
    {
      icon: 'assets/Shield.svg',
      title: '100% Secured',
      content:
        'We take proactive steps make sure your information and transactions are secure.',
    },
    {
      icon: 'assets/Send.svg',
      title: 'Seamless Integration',
      content:
        'Our digital services seamlessly integrate to save you time and effort.',
    },
  ];

  isShaking: boolean = false;

  private element: HTMLElement | undefined;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {}
  ngAfterViewInit() {
    this.element = this.el.nativeElement.querySelector('.animate-from-left');
    this.checkVisibility();
  }
  onMouseEnter() {
    this.isShaking = true;
  }

  onMouseLeave() {
    this.isShaking = false;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkVisibility();
  }

  private checkVisibility() {
    if (!this.element) {
      return;
    }
    const rect = this.element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
      this.element.classList.add('visible');
    } else {
      this.element.classList.remove('visible');
    }
  }
}
