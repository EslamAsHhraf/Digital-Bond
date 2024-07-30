import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  currentImage: { src: string; width: string; height: string; alt: string } = {
    src: 'assets/hero-1.png',
    width: '40%',
    height: '80%',
    alt: 'man with lamp',
  };
  private intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      if (this.currentImage.src === 'assets/hero-1.png') {
        this.currentImage = {
          src: 'assets/hero-3.png',
          width: '50%',
          height: '70%',
          alt: 'man with tv',
        };
      } else {
        this.currentImage = {
          src: 'assets/hero-1.png',
          width: '40%',
          height: '80%',
          alt: 'billing 1',
        };
      }
    }, 2000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
