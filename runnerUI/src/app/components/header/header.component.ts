import { Component, signal } from '@angular/core';
import { HomeButtonComponent } from '../home-button/home-button.component';
import { RunModifyButtonComponent } from 'C:/Users/Cole/Documents/Programming/runnerUI/src/app/components/run-modify-button/run-modify-button.component';

@Component({
  selector: 'app-header',
  imports: [HomeButtonComponent, RunModifyButtonComponent],
  template: `
    <div class="bg-beige-300 px-5 py-7 flex items-center shadow relative">
      <app-home-button class="absolute left-5"></app-home-button>
      <span class="text-xl font-bold text-gray-700 mx-auto">Runner Application</span>
      <app-modify-button class="absolute right-5"></app-modify-button>
    </div>
  `,
  styles: [
    `
      .bg-beige-300 {
        background-color: #e5e5c9;
      }
    `,
  ],
})
export class HeaderComponent {
  title: string = 'RunnerApp';

  showbuttonclicked() {
    console.log('show button clicked');
  }
}
