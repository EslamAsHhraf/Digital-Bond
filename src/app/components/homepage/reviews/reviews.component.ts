import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  reviews = [
    {
      name: 'Mostafa',
      title: 'Business Owner',
      review:
        'A fantastic agency that develops strategic creative and technology to deliver on our business objectives.',
      image: 'assets/people02.png',
    },
    {
      name: 'Mohamed',
      title: 'Marketing Manager',
      review:
        'Wonderful agency to work with. Always working towards the delivery of projects. Very technical and knowledgeable in the Marketing.',
      image: 'assets/people03.png',
    },
    {
      name: 'Menna',
      title: 'Sales Director',
      review:
        'Very detailed and knowledgeable, they have managed to reduce my cost per click from FB and google by 100% compared to my old agency.',
      image: 'assets/people01.png',
    },
    {
      name: 'Asma',
      title: 'CTO',
      review:
        'Competent, professional and engaged team on managerial and individual levels.',
    },
    {
      name: 'Nada',
      title: 'Marketing Team Lead',
      review:
        'We have a growing relationship with Digital Bond and they continually bring more ideas and resources to our company.',
    },
  ];
}
