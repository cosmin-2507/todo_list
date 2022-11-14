import { WeekDay } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from './components/SideBar/SideBar.component';
import { TestComponent } from './components/test/test.component';
import { luniComponent } from "./components/WeekDays/luni/luni.component";
import { martiComponent } from './components/WeekDays/marti/marti.component';
import { miercuriComponent } from './components/WeekDays/miercuri/miercuri.component';
import { joiComponent } from './components/WeekDays/joi/joi.component';
import { vineriComponent } from './components/WeekDays/vineri/vineri.component';
import { sambataComponent } from './components/WeekDays/sambata/sambata.component';
import { duminicaComponent } from './components/WeekDays/duminica/duminica.component';
import { calendarComponent } from './components/calendar/calendar.component';
const routes: Routes = [
  {
    path: '',
    component: SideBarComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'luni',
    component: luniComponent
  },
  {
    path: 'marti',
    component: martiComponent
  },
  {
    path: 'miercuri',
    component: miercuriComponent
  },
  {
    path: 'joi',
    component: joiComponent
  },
  {
    path: 'vineri',
    component: vineriComponent
  },
  {
    path: 'sambata',
    component: sambataComponent
  },
  {
    path: 'duminica',
    component: duminicaComponent
  },
  {
    path: 'calendar',
    component: calendarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
