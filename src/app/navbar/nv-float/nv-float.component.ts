import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nv-float',
  templateUrl: './nv-float.component.html',
  styleUrl: './nv-float.component.scss',
  animations: [
    trigger('DashboarOpenClose', [
      state('open', style({
        width: '300px'
      })),
      state('close', style({
        width: '0px'
      })),
      transition('close => open', [
        animate('.3s')
      ]),
      transition('open => close', [
        animate('.3s')
      ]),
    ])
  ]
})
export class NvFloatComponent {

  dOpen: boolean = false;

  dToggle = () => {
    this.dOpen = !this.dOpen;
    console.log(this.dOpen);
  }

  disableDashboardOnEsc = (e: KeyboardEvent) => {
    console.log(e);

    if (e.key == 'Escape') {
      if (this.dOpen) {
        this.dToggle();
      }

    }
  }
}
