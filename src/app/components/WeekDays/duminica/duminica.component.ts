import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';


@Component({
  selector: 'duminica',
  templateUrl: './duminica.component.html',
  styleUrls: ['./duminica.component.css']
})


export class duminicaComponent {
  tasks: string[] = [];
  disableDone: boolean[] = [];
  public showTaskForm: boolean = false;
  click: boolean = true;
  day: string = "Duminica";

  constructor() {
    if (localStorage.getItem("duminica")) {
      this.tasks = JSON.parse(localStorage.getItem("duminica")!)
      for (let task of this.tasks) {
        this.disableDone.push(false);
      }
    }

  }
  addTask(newTask: any) {
    var task = {
      day: this.day,
      taskName: newTask,
    }
    this.tasks.push(newTask);
    this.disableDone.push(false);
    this.save()
  }



  save() {
    localStorage.setItem("duminica", JSON.stringify(this.tasks))

  }

  toggleShowTaskForm() {
    this.showTaskForm = !this.showTaskForm;
  }
  deleteTask(i: number) {
    this.tasks.splice(i, 1);
    this.disableDone.splice(i, 1);
    this.save();
  }
  done(i: number) {

    this.disableDone[i] = true;



  }



}



