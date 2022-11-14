export interface ITask {
    id: string;
    day: string;
    taskName: string;
    done: boolean;
    date: string | null;
}

export interface IWeather {
    precipitation: number;
    sunrise: string;
    sunset: string;
    maxTemp: number;
    minTemp: number;
    date: string;
    weathercode: number;
}