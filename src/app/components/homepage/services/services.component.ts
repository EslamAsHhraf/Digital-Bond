import { Component, OnInit } from '@angular/core';
import { ServiceCard } from 'src/app/models/service-card';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  cards: ServiceCard[] = [
    {
      image: 'assets/public-relation.png',
      title: 'BRANDING',
    },
    {
      image: 'assets/social-media.png',
      title: 'SOCIAL MEDIA',
    },
    {
      image: 'assets/coding.png',
      title: 'WEB DEVELOPMENT',
    },
    {
      image: 'assets/app-development.png',
      title: 'MOBILE APPS',
    },
    {
      image: 'assets/production.png',
      title: 'PRODUCTION',
    },
    {
      image: 'assets/magnet.png',
      title: 'INFLUENCERS & PR',
    },
    {
      image: 'assets/sms-marketing.png',
      title: 'SMS CAMPAIGNS',
    },
  ];
}
