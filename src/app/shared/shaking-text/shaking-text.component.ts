import {
  Component,
  OnInit,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';
@Component({
  selector: 'app-shaking-text',
  templateUrl: './shaking-text.component.html',
  styleUrls: ['./shaking-text.component.css'],
})
export class ShakingTextComponent implements OnInit {
  @Input() content: string = 'Default Content';

  isShaking: boolean = false;

  private element: HTMLElement | undefined;

  constructor(private el: ElementRef) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.element = this.el.nativeElement.querySelector('.animate-from-left');
    this.checkVisibility();
  }
  onMouseEnter() {
    this.isShaking = true;
  }

  onMouseLeave() {
    this.isShaking = false;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkVisibility();
  }

  private checkVisibility() {
    if (!this.element) {
      return;
    }
    const rect = this.element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
      this.element.classList.add('visible');
    } else {
      this.element.classList.remove('visible');
    }
  }
}
