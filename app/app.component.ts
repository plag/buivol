import { Component } from '@angular/core';

export class Exercise {
  id: number;
  name: string;
}

const EXERCISES: Exercise[] = [
  { id: 1, name: 'Жим лежа' },
  { id: 2, name: 'Приседания со штангой на плечах' },
  { id: 3, name: 'Становая тяга' }
];

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1><h2>Описание упражнений</h2>
    <div>
      <ul class="Exercises">
        <li *ngFor="let exercise of exercises"
          (click)="onSelect(exercise)">
          <span class="badge">{{exercise.id}}</span> {{exercise.name}}
        <li>
      </ul>
    </div>
    <div *ngIf="selectedExercise">
      <div><label>id: </label>{{selectedExercise.id}}</div>
      <label>Название: </label>
      <input [(ngModel)]="selectedExercise.name" placeholder="название"/>
    </div>`
})

export class AppComponent {
  title = 'Workout journal';
  exercises = EXERCISES;
  selectedExercise: Exercise;
  onSelect(exercise: Exercise): void {
    this.selectedExercise = exercise;
  }
}
