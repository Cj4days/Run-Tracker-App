import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { RunListComponent } from './pages/run-list/run-list.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `

    <div class="app-root">
          <app-header></app-header>
          <router-outlet></router-outlet>
        </div>
  `,
  styles: [`
    .app-root {
      background-color: #f5f5dc; /* Light beige color */
      min-height: 100vh;
                 }
               `,],
})
export class AppComponent {
  title = 'runnerUI';
}
