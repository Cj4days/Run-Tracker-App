import { Component, signal, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Run } from 'C:/Users/Cole/Documents/Programming/runnerUI/src/app/models/run.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-runmodify',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="flex justify-between mb-4">
      <button class="bg-blue-500 text-white px-4 py-2 rounded" (click)="showAddForm = true">Add Run</button>
      <button class="bg-red-500 text-white px-4 py-2 rounded" (click)="showDeleteForm = true">Delete Run</button>
    </div>
    <form *ngIf="showAddForm" (ngSubmit)="addRun(addForm)" #addForm="ngForm" class="bg-gray-100 p-4 rounded shadow-md max-w-md mx-auto">
      <div class="flex justify-end">
        <button type="button" class="text-gray-500 hover:text-gray-700" (click)="showAddForm = false">&#x2715;</button>
      </div>
      <h2 class="text-lg font-bold mb-4">Add New Run</h2>
      <div class="mb-4">
        <label for="id" class="block text-sm font-medium text-gray-700">ID:</label>
        <input type="number" id="id" [(ngModel)]="newRun.id" name="id" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
      </div>
      <div class="mb-4">
        <label for="image" class="block text-sm font-medium text-gray-700">Image:</label>
        <input type="text" id="image" [(ngModel)]="newRun.image" name="image" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
      </div>
      <div class="mb-4">
        <label for="title" class="block text-sm font-medium text-gray-700">Title:</label>
        <input type="text" id="title" [(ngModel)]="newRun.title" name="title" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
      </div>
      <div class="mb-4">
        <label for="startedOn" class="block text-sm font-medium text-gray-700">Started On:</label>
        <input type="text" id="startedOn" [(ngModel)]="newRun.startedOn" name="startedOn" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
      </div>
      <div class="mb-4">
        <label for="completedOn" class="block text-sm font-medium text-gray-700">Completed On:</label>
        <input type="text" id="completedOn" [(ngModel)]="newRun.completedOn" name="completedOn" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
      </div>
      <div class="mb-4">
        <label for="miles" class="block text-sm font-medium text-gray-700">Miles:</label>
        <input type="text" id="miles" [(ngModel)]="newRun.miles" name="miles" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
      </div>
      <div class="mb-4">
        <label for="location" class="block text-sm font-medium text-gray-700">Location:</label>
        <input type="text" id="location" [(ngModel)]="newRun.location" name="location" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
      </div>
      <button type="submit" class="w-full bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600">Submit</button>
    </form>
    <form *ngIf="showDeleteForm" (ngSubmit)="deleteRun(deleteForm)" #deleteForm="ngForm" class="bg-gray-100 p-4 rounded shadow-md max-w-md mx-auto">
      <div class="flex justify-end">
        <button type="button" class="text-gray-500 hover:text-gray-700" (click)="showDeleteForm = false">&#x2715;</button>
      </div>
      <h2 class="text-lg font-bold mb-4">Delete Run</h2>
      <div class="mb-4">
        <label for="deleteId" class="block text-sm font-medium text-gray-700">ID:</label>
        <input
          type="number"
          id="deleteId"
          name="deleteId"
          [(ngModel)]="deleteId"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
      </div>
      <button type="submit" class="w-full bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600">Delete</button>
    </form>
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th class="py-2">ID</th>
          <th class="py-2">Name</th>
          <th class="py-2">Distance</th>
          <th class="py-2">Location</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let run of runs()">
          <td class="py-2">{{ run.id }}</td>
          <td class="py-2">{{ run.title }}</td>
          <td class="py-2">{{ run.miles }} miles</td>
          <td class="py-2">{{ run.location }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [
    `
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th,
      td {
        border: 1px solid #ddd;
        padding: 8px;
      }
      th {
        background-color: #f2f2f2;
        text-align: left;
      }
      .flex {
        display: flex;
      }
      .justify-between {
        justify-content: space-between;
      }
      .mb-4 {
        margin-bottom: 1rem;
      }
      .bg-blue-500 {
        background-color: #4a90e2;
      }
      .bg-red-500 {
        background-color: #e53e3e;
      }
      .bg-green-500 {
        background-color: #38a169;
      }
      .text-white {
        color: #fff;
      }
      .px-4 {
        padding-left: 1rem;
        padding-right: 1rem;
      }
      .py-2 {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
      }
      .rounded {
        border-radius: 0.25rem;
      }
      .text-gray-500 {
        color: #6b7280;
      }
      .hover\:text-gray-700:hover {
        color: #374151;
      }
    `,
  ],
})
export class RunModifyComponent {
  http: HttpClient = inject(HttpClient);

  deleteId: number | null = null;

  runs = signal<Run[]>([]);
  showAddForm = false;
  showDeleteForm = false;
  newRun: Run = {
    id: 0,
    image: 'https://images.unsplash.com/photo-1596460700790-d079c2c8ade6?',
    title: '',
    startedOn: '2024-12-03T10:15:30',
    completedOn: '2024-12-03T10:25:30',
    miles: 3,
    location: 'OUTDOOR'
  };

  async ngOnInit() {
    const res = await fetch('http://localhost:8080/api/runs');
    const data = await res.json();
    this.runs.set(data);
  }

  addRun(form: NgForm) {
    this.http.post('http://localhost:8080/api/runs', form.value).subscribe(() => {
      this.showAddForm = false;
      window.location.reload();
    });
  }

  deleteRun(form: NgForm) {
    console.log(this.deleteId);
    if (this.deleteId !== null) {
      this.http.delete(`http://localhost:8080/api/runs/${this.deleteId}`).subscribe(() => {
        this.showDeleteForm = false;
        window.location.reload();
    });
  }
}
}
