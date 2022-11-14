import { Component } from '@angular/core';


@Component({
  selector: 'vineri',
  templateUrl: './vineri.component.html',
  styleUrls: ['./vineri.component.css']
})


export class vineriComponent {
  tasks: string[] = [];
  disableDone: boolean[] = [];
  public showTaskForm: boolean = false;
  click: boolean = true;

  constructor() {
    if (localStorage.getItem("duminica")) {
      this.tasks = JSON.parse(localStorage.getItem("duminica")!)
      for (let task of this.tasks) {
        this.disableDone.push(false);
      }
    }

  }

  addTask(newTask: any) {
    console.log(newTask);
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
