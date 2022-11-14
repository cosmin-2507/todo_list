import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { TasksService } from 'src/services/tasks.service';
import { DatePipe, formatDate } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';
import { ITask, IWeather } from 'src/models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})
export class AppComponent {
  public title: string = 'To Do List';
  public myDate: any = new Date();
  public weatherDate: any = new Date();
  public currentDate = new Date();
  public tasks: ITask[] = [];
  public day: string = ""
  public filteredTasks: ITask[] = [];
  public showCalendar: boolean = false;
  public weekDays: string[] = ['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata', 'Duminica'];
  public filteredCal: ITask[] = [];
  public weatherData: any;
  public weather: IWeather[] = [];
  public filteredWeather: IWeather | undefined;
  public showFilteredWeather: boolean = false;

  constructor(private tasksService: TasksService, private datePipe: DatePipe, private api: TasksService) {
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

    this.tasksService.getTasks().subscribe(res => {
      console.log(res);
    })

    if (localStorage.getItem("tasks")) {
      this.tasks = JSON.parse(localStorage.getItem("tasks")!)
    }
    this.filterTasks();
    this.filterCal();
  }
  ngOnInit() {
    this.api.getWeather().subscribe((data: any) => {
      this.weatherData = data;
      console.log(this.weatherData);
      for (var i = 0; i <= 6; i++) {
        var varWeather: IWeather = {
          precipitation: this.weatherData.daily.precipitation_sum[i],
          sunrise: this.dateToHour(this.weatherData.daily.sunrise[i])!,
          sunset: this.dateToHour(this.weatherData.daily.sunset[i])!,
          maxTemp: this.weatherData.daily.temperature_2m_max[i],
          minTemp: this.weatherData.daily.temperature_2m_min[i],
          date: this.weatherData.daily.time[i],
          weathercode: this.weatherData.daily.weathercode[i]
        }
        this.weather.push(varWeather);
        console.log(this.weather);

      }
    });
  }
  dateToHour(dateString: string) {
    var sunriseDate = new Date(dateString)
    var hour = this.datePipe.transform(sunriseDate, 'HH:mm')
    return hour;
  }

  filterByDate() {
    this.filteredWeather = this.weather.find(t => t.date == this.datePipe.transform(this.weatherDate, 'YYYY-MM-dd'))
  }

  deleteTask(id: string) {
    var index = this.tasks.findIndex(t => t.id == id)
    this.tasks.splice(index, 1);

    this.save();
    this.filterTasks();
    this.filterCal();

  }

  done(id: string) {
    var task = this.tasks.find(t => t.id == id)!
    task.done = true
  }

  hoverOut() {
    this.showFilteredWeather = false;
  }

  hoverDay(i: number) {
    console.log(i);

    this.weatherDate = this.getDateOfDay(i);
    this.filterByDate();

    this.showFilteredWeather = true;
  }

  changeDay(i: number) {
    this.myDate = this.getDateOfDay(i);
    this.filterTasks();
    this.showCalendar = false;
    this.day = this.weekDays[i];
    this.showFilteredWeather = false;
  }
  save() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  addNewTask(newTask: any) {
    var task: ITask = {
      day: this.day,
      taskName: newTask,
      id: uuidv4(),
      done: false,
      date: this.datePipe.transform(this.myDate, 'M/dd/YYYY')
    }
    this.tasks.push(task);

    this.save();
    this.filterTasks();
    this.filterCal();
  }


  filterTasks() {
    this.filteredTasks = this.tasks.filter(t => t.date == this.datePipe.transform(this.myDate, 'M/dd/YYYY'));
  }

  filterCal() {
    this.filteredCal = this.tasks.filter(t => t.day == '');
  }

  toggleShowCalendar() {
    this.showCalendar = !this.showCalendar;
    this.day = ''
  }

  dateChange(event: any) {
    this.myDate = event.value;
  }

  getDateOfDay(dayIndex: number) {
    var date = new Date();
    date.setHours(0, 0, 0, 0);
    var offset = dayIndex + 1 - date.getDay();
    date.setDate(date.getDate() + offset);
    return date;
  }

  get sortByDateDesc() {
    return this.filteredCal.sort((a: any, b: any) => {
      return <any>new Date(a.date) - <any>new Date(b.date);
    });
  }
}



