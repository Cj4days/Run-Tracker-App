import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modify-button',
  imports: [],
  template: `
    <button class="bg-blue-400 w-full border px-8 py-3 rounded-full shadow-md hover:opacity-90" (click)="navigateHome()">
      {{label}}
    </button>
  `,
  styles: ``
})
export class RunModifyButtonComponent {
  label: string = 'Add / Modify Run';
  @Output() btnClicked = new EventEmitter<void>();

  constructor(private router: Router) {}

  navigateHome() {
    this.router.navigate(['/runmodify']);
    this.btnClicked.emit();
  }
}
