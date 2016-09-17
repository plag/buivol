import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1><h2>"{{exercise.name}}" описание</h2>
    <div><label>id: </label>{{exercise.id}}</div>
    <div>
      <label>Название: </label>
      <input [(ngModel)]="exercise.name" placeholder="название"/>
    </div>`
})
export class AppComponent {
  title = 'Workout journal';
  exercise: Exercise = {
    id: 1,
    name: 'Жим лежа'
  }
}

export class Exercise {
  id: number;
  name: string;
}
