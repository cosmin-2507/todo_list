import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/SideBar/SideBar.component';
import { ButtonComponent } from './components/button/button.component';
import { TestComponent } from './components/test/test.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { luniComponent } from './components/WeekDays/luni/luni.component';
import { martiComponent } from './components/WeekDays/marti/marti.component';
import { miercuriComponent } from './components/WeekDays/miercuri/miercuri.component';
import { joiComponent } from './components/WeekDays/joi/joi.component';
import { vineriComponent } from './components/WeekDays/vineri/vineri.component';
import { sambataComponent } from './components/WeekDays/sambata/sambata.component';
import { duminicaComponent } from './components/WeekDays/duminica/duminica.component';
import { TaskFormComponent } from './components/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { TasksService } from 'src/services/tasks.service';
import { MatIconModule } from '@angular/material/icon';
import { calendarComponent } from './components/calendar/calendar.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ButtonComponent,
    TestComponent,
    luniComponent,
    martiComponent,
    miercuriComponent,
    joiComponent,
    vineriComponent,
    sambataComponent,
    duminicaComponent,
    TaskFormComponent,
    calendarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
