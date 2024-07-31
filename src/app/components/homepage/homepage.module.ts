import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { HeroComponent } from './hero/hero.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeatureCardComponent } from 'src/app/shared/feature-card/feature-card.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ShakingTextComponent } from 'src/app/shared/shaking-text/shaking-text.component';
import { ServiceCardComponent } from 'src/app/shared/service-card/service-card.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule],
  declarations: [
    HomepageComponent,
    HeroComponent,
    FeatureCardComponent,
    AboutComponent,
    ServicesComponent,
    ShakingTextComponent,
    ServiceCardComponent,
    ReviewsComponent,
  ],
  exports: [HomepageComponent],
})
export class HomepageModule {}
