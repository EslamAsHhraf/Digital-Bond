import { Component, OnInit } from '@angular/core';
import { FooterLinks } from 'src/app/models/footer-link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  footerLinks: FooterLinks[] = [
    {
      title: 'Get in touch',
      links: [
        {
          name: '+2 - 01021551322',
          image: 'assets/call.png',
          link: 'tel:+201021551322',
        },
        {
          name: 'Bonder@digitalbondmena.com',
          image: 'assets/sms.png',
          link: 'mailto:Bonder@digitalbondmena.com',
        },
        {
          name: '11 Ahmed Al Shatouri, Ad Dokki, Giza Governorate',
          image: 'assets/loc.png',
          link: 'https://goo.gl/maps/Xy4S5zirTme48gcj9',
        },
      ],
    },

    {
      title: 'Explore more',
      links: [
        { name: 'Home', link: 'https://www.digitalbondmena.com/en' },
        { name: 'About us', link: 'https://www.digitalbondmena.com/en/about' },
        { name: 'careers', link: 'https://www.digitalbondmena.com/en/careers' },
        {
          name: 'Say hello',
          link: 'https://www.digitalbondmena.com/en/contact',
        },
        {
          name: 'Privacy Policy',
          link: 'https://www.digitalbondmena.com/en/privacy-policy',
        },
      ],
    },
  ];

  socialMedia = [
    {
      id: 'instagram',
      icon: 'assets/instagram.svg',
      link: 'https://www.instagram.com/digitalbondmena/',
    },
    {
      id: 'facebook',
      icon: 'assets/facebook.svg',
      link: 'https://www.facebook.com/DigitalBondMena/',
    },
    {
      id: 'linkedin',
      icon: 'assets/linkedin.svg',
      link: 'https://www.linkedin.com/company/digital-bond/posts/?feedView=all',
    },
    {
      id: 'tiktok',
      icon: 'assets/tiktok.svg',
      link: 'https://www.tiktok.com/@digitalbondmena',
    },
  ];

  // function to open links in new tab
  openLink(url: string): void {
    window.open(url, '_blank');
  }
}
