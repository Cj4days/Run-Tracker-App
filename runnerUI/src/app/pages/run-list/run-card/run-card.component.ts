import { Component, input } from '@angular/core';
import { Run } from '../../../models/run.model';

@Component({
  selector: 'app-run-card',
  imports: [],
  template: `
<div class="bg-white p-4 shadow-md rounded-lg border px-6 flex gap-6 relative">
  <div class="flex justify-center">
    <img [src]="run().image" class="w-[220px] h-[200px] object-cover rounded-lg" />
  </div>


  <div class="flex flex-col  mt-2 space-y-3px">
    <span class="text-md font-bold">Run Title: {{run().title}}</span>
    <span class="text-md font-bold">Miles Ran: {{run().miles}}</span>
    <span class="text-md font-bold">Completed Time: {{run().completedOn}}</span>
    <span class="text-md font-bold">Location: {{run().location}}</span>
  </div>
</div>
`,
  styles: ``
})
export class RunCardComponent {
  run = input.required<Run>();
}
