import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'ceva',
  templateUrl: "test.component.html",
  styleUrls: ["test.component.css"]
})

export class TestComponent {

  public titlu: string = "Titlu 1";

  public numar1: number = 20;
  public numar2: number = 0;

  public rezultat: number = this.numar1 + this.numar2;

  public array1: number[] = [1, 2, 3, 4, 5, 6];

  constructor() {
    this.titlu = "Titlu 5";
  }

  buttonClick() {
    this.rezultat = +this.numar1 + +this.numar2;
    this.array1.push(this.numar2);
  }

}
