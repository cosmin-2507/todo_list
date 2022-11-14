import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-SideBar',
  templateUrl: './SideBar.component.html',
  styleUrls: ['./SideBar.component.css']
})
export class SideBarComponent implements OnInit {
  public tasks: any[] = [];
  disableDone: boolean[] = [];
  public myDate: any = new Date();


  constructor(private router: Router, private datePipe: DatePipe) {
    this.myDate = this.datePipe.transform(this.myDate, 'M/dd/YYYY');
    if (localStorage.getItem("calendar")) {
      this.tasks = JSON.parse(localStorage.getItem("calendar")!)
      this.tasks = this.tasks.filter(task => task.taskDate == this.myDate)
    }
  }

  ngOnInit(): void {
  }


  goToLuni() {
    this.router.navigateByUrl('/luni');
  }
  deleteTask(i: number) {
    this.tasks.splice(i, 1);
    this.disableDone.splice(i, 1);
    this.save();
  }
  done(i: number) {

    this.disableDone[i] = true;
  }
  save() {
    localStorage.setItem("duminica", JSON.stringify(this.tasks))

  }


}

