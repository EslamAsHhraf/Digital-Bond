import { Component, OnInit } from '@angular/core';
import { FeatureCard } from 'src/app/models/feature-card';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  features:FeatureCard[] = [
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
  constructor() {}

  ngOnInit() {}
}
