import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  map,
  debounceTime,
  tap,
  merge,
  delay,
  mapTo,
  share,
  repeat,
  switchMap,
  takeUntil,
} from 'rxjs/operators';
import { ServiceCard } from 'src/app/models/service-card';


@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css'],
})
export class ServiceCardComponent implements OnInit {
  @Input() cardInput: ServiceCard = {
    image: '',
    title: '',
  };
  @ViewChild('card', { static: true }) card: ElementRef | undefined;
  cardStyling = this.cardStyle();

  ngOnInit() {
    const mouseMove$ = fromEvent<MouseEvent>(
      this.card?.nativeElement,
      'mousemove'
    );
    const mouseLeave$ = fromEvent<MouseEvent>(
      this.card?.nativeElement,
      'mouseleave'
    ).pipe(delay(100), mapTo({ mouseX: 0, mouseY: 0 }), share());
    const mouseEnter$ = fromEvent<MouseEvent>(
      this.card?.nativeElement,
      'mouseenter'
    ).pipe(takeUntil(mouseLeave$));

    mouseEnter$
      .pipe(
        switchMap(() => mouseMove$),
        map((e) => ({
          mouseX: e.pageX - this.nativeElement.offsetLeft - this.width / 2,
          mouseY: e.pageY - this.nativeElement.offsetTop - this.height / 2,
        })),
        merge(mouseLeave$),
        repeat()
      )
      .subscribe((e) => {
        this.mouseX = e.mouseX;
        this.mouseY = e.mouseY;
      });
  }

  height: number = 0;
  width: number = 0;
  backgroundImage: string = '';
  mouseX = 0;
  mouseY = 0;
  get mousePX() {
    return this.mouseX / this.width;
  }
  get mousePY() {
    return this.mouseY / this.height;
  }

  cardStyle() {
    return this.transformStyle();
  }

  cardBgTransform() {
    return this.transformStyle();
  }

  private transformStyle() {
    const tX = this.mousePX * -30;
    const tY = this.mousePY * -30;
    return { transform: `rotateY(${tX}deg) rotateX(${tY}deg)` };
  }
  get nativeElement(): HTMLElement {
    if (!this.card) {
      throw new Error('Card element not found');
    }
    return this.card.nativeElement;
  }

  ngAfterViewInit() {
    if (!this.card) {
      throw new Error('Card element not found');
    }
    this.width = this.card.nativeElement.offsetWidth;
    this.height = this.card.nativeElement.offsetHeight;
  }
}
