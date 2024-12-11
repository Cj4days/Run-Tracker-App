import { Component, signal } from '@angular/core';
import { Run } from 'C:/Users/Cole/Documents/Programming/runnerUI/src/app/models/run.model';
import { RunCardComponent } from './run-card/run-card.component';
@Component({
  selector: 'app-run-list',
imports: [RunCardComponent],
template: `
<div class="p-8 grid grid-cols-2 gap-4">
  @for ( run of runs(); track $index) {
    <app-run-card [run]="run" />
    }

</div>
 `,
  styles: ``
})

export class RunListComponent {

  async ngOnInit() {
    const res = await fetch('http://localhost:8080/api/runs');
    const data = await res.json();
    this.runs.set(data);
    }

  runs = signal<Run[]> ([]);
}
