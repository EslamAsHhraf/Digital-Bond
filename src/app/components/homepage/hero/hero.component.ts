import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(600)]),
      transition(':leave', [animate(600, style({ opacity: 0 }))]),
    ]),
  ],
})
export class HeroComponent implements OnInit {
  currentImage: { src: string; alt: string } = {
    src: 'assets/hero-1.png',
    alt: 'man with lamp',
  };
  showImage = true;

  private intervalId: any;

  ngOnInit(): void {
    // switch images every 4 seconds
    this.intervalId = setInterval(() => {
      this.showImage = false;

      setTimeout(() => {
        if (this.currentImage.src === 'assets/hero-1.png') {
          this.currentImage = {
            src: 'assets/hero-2.webp',
            alt: 'woman',
          };
        } else if (this.currentImage.src === 'assets/hero-2.webp') {
          this.currentImage = {
            src: 'assets/hero-3.png',
            alt: 'man with tv',
          };
        }
          else{
          this.currentImage = {
            src: 'assets/hero-1.png',
            alt: 'man with lamp',
          };
        }
        this.showImage = true;
      }, 600);
    }, 4000);
  }

  ngOnDestroy(): void {
    // clear interval on destroy
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
