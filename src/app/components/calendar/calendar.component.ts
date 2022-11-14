import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})


export class calendarComponent {
  public showTaskForm: boolean = false;
  public tasksCal: any[] = [];
  disableDone: boolean[] = [];

  saveDate(newDate: any) {
    console.log(newDate)
  }

  toggleShowTaskForm() {
    this.showTaskForm = !this.showTaskForm;
  }

  addTask(newTask: any, newDate: any) {
    var task = {
      taskDate: newDate,
      taskName: newTask,

    }
    console.log();
    this.tasksCal.push(task);
    this.save()

  }

  save() {
    localStorage.setItem("calendar", JSON.stringify(this.tasksCal))

  }
  deleteTask(i: number) {
    this.tasksCal.splice(i, 1);
    this.disableDone.splice(i, 1);
    this.save();

  }
  done(i: number) {

    this.disableDone[i] = true;

  }
}
