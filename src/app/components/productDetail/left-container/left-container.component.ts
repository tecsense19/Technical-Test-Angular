import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-container',
  standalone: true,
  imports: [],
  templateUrl: './left-container.component.html',
  styleUrl: './left-container.component.css'
})
export class LeftContainerComponent {
  @Input() product: any;

  currentImage: string | any = 0;

  selectComponent(activeNum: any): void {
    this.currentImage = activeNum;
  }

  counter(i: number) {
    return new Array(i);
  }

}
