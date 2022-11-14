import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TasksService {

  constructor(private httpClient: HttpClient, private http: HttpClient) { }

  getTasks() {
    return this.httpClient.get("http://localhost:5000/getTasks");
  }
  getWeather() {
    return this.http.get
      ("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,windspeed_10m_max&timezone=auto")
  }


}
