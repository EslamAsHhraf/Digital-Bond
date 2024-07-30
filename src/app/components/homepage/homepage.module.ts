import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomepageComponent, HeroComponent],
  exports: [HomepageComponent],
})
export class HomepageModule {}
