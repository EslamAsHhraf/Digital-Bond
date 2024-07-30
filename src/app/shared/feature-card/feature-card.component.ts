import { Component, OnInit, Input } from '@angular/core';
import { FeatureCard } from 'src/app/models/feature-card';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css'],
})
export class FeatureCardComponent implements OnInit {
  @Input() feature: FeatureCard = {
    icon: '',
    title: '',
    content: '',
    };
  @Input() index: number = 0;
  @Input() length: number = 0;
  constructor() {}

  ngOnInit() {}
}
