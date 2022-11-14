import { Component, EventEmitter, Output, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: "task-form",
  templateUrl: "form.component.html",
  styleUrls: ["form.component.css"]
})

export class TaskFormComponent {

  @Output() newTaskEvent = new EventEmitter<string>();
  constructor() {

  }

  public addNewTask(value: string) {
    console.log(value);
    this.newTaskEvent.emit(value);
  }


}
